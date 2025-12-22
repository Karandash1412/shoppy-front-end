"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

/**
 * Sets authentication cookies from the API response
 */
const setAuthCookies = async (response: Response) => {
    const setCookiesHeader = response.headers.get("Set-Cookie");
    if (setCookiesHeader) {
        const token = setCookiesHeader.split(";")[0].split("=")[1];
        const cookieStore = await cookies();
        cookieStore.set("Authentication", token, {
            httpOnly: true,
            secure: true,
            expires: new Date(jwtDecode(token).exp! * 1000)
        });
    }
};

/**
 * Server action to handle user login
 */
export default async function loginAction(prevState: any, formData: FormData) {
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
        }),
    });
    const parsedResponse = await response.json();
    if (!response.ok) {
        return { error: parsedResponse };
    }
    await setAuthCookies(response);
    redirect("/");
}

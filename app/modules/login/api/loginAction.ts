"use server";

import { redirect } from "next/navigation";

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
    redirect("/");
}

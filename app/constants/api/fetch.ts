"use server";

import { cookies } from "next/headers";

const getHeaders = async () => {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("Authentication");

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    if (authCookie) {
        headers["Cookie"] = `Authentication=${authCookie.value}`;
    }

    return headers;
};

/**
 * Makes a POST request to the API
 */
export const post = async (path: string, formData: FormData) => {
    const headers = await getHeaders();
    const response = await fetch(`${process.env.API_URL}/${path}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
        }),
    });
    const parsedResponse = await response.json();
    if (!response.ok) {
        return { error: parsedResponse };
    }
    return { error: null };
}

export const get = async (path: string, tag?: string) => {
    const headers = await getHeaders();
    const response = await fetch(`${process.env.API_URL}/${path}`, {
        headers,
        method: 'GET',
        next: { tags: [`${tag}`] }
    });

    return await response.json();
}
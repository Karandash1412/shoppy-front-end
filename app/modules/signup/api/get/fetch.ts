"use server";

/**
 * Makes a POST request to the API
 */
export const post = async (path: string, formData: FormData) => {
    const response = await fetch(`${process.env.API_URL}/${path}`, {
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
    return { error: null };
}
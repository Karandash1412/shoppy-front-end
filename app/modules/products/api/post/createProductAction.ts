"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
/**
 * Server action to create a new product
 */
export default async function createProductAction(prevState: any, formData: FormData) {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("Authentication");

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    if (authCookie) {
        headers["Cookie"] = `Authentication=${authCookie.value}`;
    }

    const response = await fetch(`${process.env.API_URL}/products`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name: formData.get('name'),
            description: formData.get('description'),
            price: parseFloat(formData.get('price') as string),
        }),
    });

    const parsedResponse = await response.json();
    if (!response.ok) {
        return { error: parsedResponse };
    }
    revalidateTag("products", 'max');
    return { error: null, success: true };
}
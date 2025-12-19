"use server";
import { redirect } from "next/navigation";

export default async function createUser(prevState: any, formData: FormData) {
    try {
        const response = await fetch(`${process.env.API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        });
        const parsedResponse = await response.json();
        if (!response.ok) {
            return { error: parsedResponse };
        }
    } catch (error: unknown) {
        return {
            error: (error as Error) || { message: 'An unknown error occurred', statusCode: 500, error: 'An unknown error occurred' }
        }
    }
    redirect('/');
}
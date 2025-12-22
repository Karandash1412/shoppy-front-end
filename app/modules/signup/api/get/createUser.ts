"use server";
import { redirect } from "next/navigation";
import { post } from "./fetch";

/**
 * Server action to create a new user
 */
export default async function createUser(prevState: any, formData: FormData) {
    const { error } = await post("users", formData);
    if (error) {
        return { error };
    }
    redirect("/");
}
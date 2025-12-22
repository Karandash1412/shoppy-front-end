"use server";
import { get } from "../../../../constants/api/fetch";
/**
 * Fetches the current user's information from the API
 */
export default async function getMe() {
    return (await get("/users/me"));
}
"use server";
import { get } from "../../../../constants/api/fetch";

export default async function getProducts() {
    return (await get("products", "products"));
}
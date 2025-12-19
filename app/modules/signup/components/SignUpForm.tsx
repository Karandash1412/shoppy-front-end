"use client";
import { Button, Link, TextField, Typography } from "@mui/material";
import createUser from "../api/get/createUser";
import { useActionState } from "react";

export default function SignUpForm() {
    const [state, formAction] = useActionState(createUser, { error: '' });
    console.log(state)
    return (
        <form className="flex flex-col gap-2" action={formAction}>
            <TextField name="email" id="email" label="Email" variant="outlined" type="email" />
            <TextField name="password" id="password" label="Password" variant="outlined" type="password" />
            <Button type="submit" variant="contained" color="primary">Signup</Button>
            <Typography variant="body2" color="text.secondary">
                Already have an account? <Link href="/auth/login">Login</Link>
            </Typography>
            {state.error && (
                <Typography variant="body2" color="error">
                    {state.error.statusCode} {state.error.error}: {Array.isArray(state.error.message) ? state.error.message.join(', ') : state.error.message}
                </Typography>
            )}
        </form>
    )
}
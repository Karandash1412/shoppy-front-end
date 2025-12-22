"use client";
import { Button, Link, TextField, Typography } from "@mui/material";
import createUser from "../api/get/createUser";
import { useActionState } from "react";
import { formatErrorForDisplay } from "../../../constants/utils/error";

/**
 * Sign up form component
 */
export default function SignUpForm() {
    const [state, formAction] = useActionState(createUser, { error: null });

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
                    {formatErrorForDisplay(state.error)}
                </Typography>
            )}
        </form>
    );
}
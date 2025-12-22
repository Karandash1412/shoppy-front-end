"use client";
import { Button, Link, TextField, Typography } from "@mui/material";
import { useActionState } from "react";
import loginAction from "../api/loginAction";
import { formatErrorForDisplay } from "../../../utils/error";

/**
 * Login form component
 */
export default function Login() {
    const [state, formAction] = useActionState(loginAction, { error: null });
    const errorMessage = formatErrorForDisplay(state.error);

    return (
        <form action={formAction} className="flex flex-col gap-2">
            <TextField
                error={!!state.error}
                helperText={errorMessage}
                name="email"
                label="Email"
                variant="outlined"
                type="email"
            />
            <TextField
                error={!!state.error}
                helperText={errorMessage}
                name="password"
                label="Password"
                variant="outlined"
                type="password"
            />
            <Button type="submit" variant="contained" color="primary">Login</Button>
            <Typography variant="body2" color="text.secondary">
                Don't have an account? <Link href="/auth/signup">Sign up</Link>
            </Typography>
        </form>
    );
} 
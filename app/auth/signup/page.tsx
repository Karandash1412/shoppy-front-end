"use client";

import { Stack, Typography } from "@mui/material";
import SignUpForm from "@/app/modules/signup/components/SignUpForm";

export default function SignupPage() {
    return (
        <Stack spacing={2} className="w-full max-w-xs">
            <Typography variant="h1" color="text.primary">
                Signup
            </Typography>
            <SignUpForm />
        </Stack>
    );
}
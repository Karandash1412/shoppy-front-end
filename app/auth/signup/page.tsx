import { Button, Link, Stack, TextField, Typography } from "@mui/material";

export default function SignupPage() {
    return (
        <Stack spacing={2} className="w-full max-w-xs">
            <Typography variant="h1" color="text.primary">
                Signup
            </Typography>
            <TextField label="Email" variant="outlined" type="email" />
            <TextField label="Password" variant="outlined" type="password" />
            <Button variant="contained" color="primary">Signup</Button>
            <Typography variant="body2" color="text.secondary">
                Already have an account? <Link href="/auth/login">Login</Link>
            </Typography>
        </Stack>
    );
}
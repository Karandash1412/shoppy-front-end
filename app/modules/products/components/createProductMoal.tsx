"use client";
import { Box, Modal, Typography } from "@mui/material";
import { Button, TextField } from "@mui/material";
import { useActionState, useEffect } from "react";
import { formatErrorForDisplay } from "../../../constants/utils/error";
import createProductAction from "../api/post/createProductAction";

const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

/**
 * Modal component for creating a new product
 */
export default function CreateProductModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [state, formAction] = useActionState(createProductAction, { error: null });
    const errorMessage = formatErrorForDisplay(state.error);

    useEffect(() => {
        if (state.success) {
            onClose();
            window.location.reload();
        }
    }, [state.success, onClose]);

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styles} className="flex flex-col gap-2">
                <Typography variant="h6" component="h2">
                    Create Product
                </Typography>
                <form action={formAction} className="flex flex-col gap-2">
                    <TextField
                        error={!!state.error}
                        helperText={state.error ? errorMessage : ""}
                        name="name"
                        label="Product Name"
                        variant="outlined"
                        required
                        fullWidth
                    />
                    <TextField
                        error={!!state.error}
                        helperText={state.error ? errorMessage : ""}
                        name="description"
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={3}
                        required
                        fullWidth
                    />
                    <TextField
                        error={!!state.error}
                        helperText={state.error ? errorMessage : ""}
                        name="price"
                        label="Price"
                        variant="outlined"
                        type="number"
                        inputProps={{ step: "0.01", min: "0" }}
                        required
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Create Product
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}

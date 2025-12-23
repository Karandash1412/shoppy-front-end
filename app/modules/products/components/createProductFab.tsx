"use client";

import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CreateProductModal from "./createProductMoal";
import { useState } from "react";

export default function CreateProductFab() {
    const [modalVisisble, setModalVisible] = useState(false);


    return (
        <>
            <CreateProductModal open={modalVisisble} onClose={() => setModalVisible(false)} />
            <div className="absolute bottom-10 left-10">
                <Fab color="primary" aria-label="add" onClick={() => setModalVisible(true)}>
                    <AddIcon />
                </Fab>
            </div>
        </>
    );
}
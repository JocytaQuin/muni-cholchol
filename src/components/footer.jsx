import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#333', color: '#fff', py: 2, textAlign: 'center' }}>
            {/* Texto del pie de página */}
            <Typography variant="body2">
                © 2025 Ilustre Municipaliodad de Cholchol. Todos los derechos reservados.
            </Typography>
        </Box>

    )
}
export default Footer;
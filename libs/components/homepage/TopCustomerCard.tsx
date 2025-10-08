import React from "react";
import { Stack, Box } from "@mui/material";

const TopCustomerCard = () => {
    return (
        <Stack className={"card"}>
                <img src="/img/headerImages/userImage.jpg" alt="" className={"image"} />
      
            <Box className={"info"}>
                <strong className={"name"}>Jessica</strong>
            </Box>
        </Stack>
    );
};

export default TopCustomerCard;
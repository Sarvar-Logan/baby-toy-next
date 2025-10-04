import withLayoutBasic from "@/libs/components/LayoutBasic";
import withLayoutMain from "@/libs/components/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

 const Cart: NextPage = () => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Cart</Box>
        </Stack>
      </Container>

    </>
  );
}
export default withLayoutBasic(Cart)
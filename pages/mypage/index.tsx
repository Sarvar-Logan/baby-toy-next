import withLayoutBasic from "@/libs/components/LayoutBasic";
import withLayoutMain from "@/libs/components/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

 const MyPage: NextPage = () => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>MyPage</Box>
        </Stack>
      </Container>

    </>
  );
}
export default withLayoutBasic(MyPage)
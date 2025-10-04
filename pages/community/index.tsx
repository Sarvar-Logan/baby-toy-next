import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

 const Community: NextPage = () => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Community</Box>
        </Stack>
      </Container>

    </>
  );
}
export default withLayoutBasic(Community)
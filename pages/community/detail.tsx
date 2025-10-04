import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

 const CommunityDetail: NextPage = () => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>CommunityDetail</Box>
        </Stack>
      </Container>

    </>
  );
}
export default withLayoutBasic(CommunityDetail)
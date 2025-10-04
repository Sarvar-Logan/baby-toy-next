import withLayoutMain from "@/libs/components/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

 const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>SelectType</Box>
          <Box>TopPorodcuts</Box>
          <Box>Advertisment</Box>
          <Box>PopularProduct</Box>
          <Box>FromCustomers</Box>
          <Box>Photos</Box>
          <Box>TopUsers</Box>
          <Box>Delivery</Box>
          <Box>NewsLetter</Box>
        </Stack>
      </Container>

    </>
  );
}

export default withLayoutMain(Home)

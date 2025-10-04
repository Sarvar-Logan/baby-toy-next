import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Stack>
        <Stack flexDirection={"column"}>
      
          <Stack>
            <Stack className="container">SelectType</Stack>
          </Stack>
       
          <Stack>
            <Stack className="container">TopPorodcuts</Stack>
          </Stack>
       
          <Stack>
            <Stack className="container">Advertisment</Stack>
          </Stack>
       
          <Stack>
            <Stack className="container">PopularProduct</Stack>
          </Stack>
       
          <Stack>
            <Stack className="container">FromCustomers</Stack>
          </Stack>
       
          <Stack>
            <Stack className="container">Photos</Stack>
          </Stack>
       
          <Stack>
            <Stack className="container">TopUsers</Stack>
          </Stack>
       
          <Stack>
            <Stack className="container">Delivery</Stack>
          </Stack>
       
          <Stack>
            <Stack className="container">NewsLetter</Stack>
          </Stack>
       
        </Stack>
      </Stack>

    </>
  );
}

export default withLayoutMain(Home)

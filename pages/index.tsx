import Collection from "@/libs/components/homepage/Collection";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Stack className="home-page">
        <Collection />
        <Stack className="container">TopPorodcuts</Stack>


        <Stack className="container">Advertisment</Stack>

        <Stack className="container">PopularProduct</Stack>

        <Stack className="container">FromCustomers</Stack>

        <Stack className="container">Photos</Stack>

        <Stack className="container">TopUsers</Stack>

        <Stack className="container">Delivery</Stack>

        <Stack className="container">NewsLetter</Stack>

      </Stack>

    </>
  );
}

export default withLayoutMain(Home)

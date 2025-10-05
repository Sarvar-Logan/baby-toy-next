import { Box, Button, Link, Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Kids Shop</title>
        </Head>

        <Stack id="pc-wrap">
          <Stack id={"top"}>
            <Top />
          </Stack>
          <Stack className="header-main">
            <Stack className="header-info">
              <Box className="header-title">
                <h1>Play, learn, & grow!</h1>
              </Box>
              <Box className="header-subtitle">
                Crafting smiles with every toy, made for learning, fun, and growth
              </Box>
              <Button className="header-shop" variant="contained">
                <Link href='/shop'>
                  Shop
                </Link>
              </Button>
            </Stack>
          </Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack id="footer">Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;


// pc-wrap qilinsa bizning hamma componentizimiada ishlata olamiz 

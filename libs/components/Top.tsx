import { Box, Button, ButtonGroup, Link, Stack, TextField } from "@mui/material"
import PardaTop from "./TopParda"

const Top = () => {
  const user = null;
  return (
    <>
      <Stack className="navbar">

        <Stack className="navbar-top">
          <PardaTop />
        </Stack>
        <Stack className="navbar-main">
          <Stack className="container">

            <Stack className="logo-box">
              <Link href="/">
                <img src="/img/icons/logoNoBackground.png" alt="" />
              </Link>
            </Stack>

            <Stack className="router-box">
              <Link href={"/"}>
                <div>Home</div>
              </Link>

              <Link href={"/shop"}>
                <div>Shop</div>
              </Link>

              <Link href={"/contact"}>
                <div>Contact</div>
              </Link>

              <Link href={"/community?articleCategory=FREE"}>
                <div>Community</div>
              </Link>
              {user &&
                <>
                  <Link href={"/mypage"}>
                    <div>Mypage</div>
                  </Link>
                </>

              }
              <Link href={"/help"}>
                <div>Help</div>
              </Link>
            </Stack>

            <Stack className="right-box">
              <Link href="/cart" sx={{ color: "black" }}>
                <img src="/img/icons/cart.png" alt="" />
              </Link>
              <Stack className='search-field'>
                <TextField className="text-field" placeholder="search" size="small" />
                <Box className="search-button">
                  <Button type="submit">
                    <img src="/img/icons/icon.png" alt="search" />
                  </Button>
                </Box>

              </Stack>

            </Stack>
          </Stack>
        </Stack>
      </Stack >
    </>
  )
}


export default Top
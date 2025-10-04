import { Box, Button, ButtonGroup, Link, Stack, Typography } from "@mui/material"
import PardaTop from "./TopParda"

const Top = () => {
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

              <Link href={"/blog"}>
                <div>Contact</div>
              </Link>

              <Link href={"/community?articleCategory=FREE"}>
                <div>community</div>
              </Link>

              <Link href={"/cs"}>
                <div>CS</div>
              </Link>

              <Link href={"/help"}>
                <div>Help</div>
              </Link>
            </Stack>


            <Stack className="search-box">
              <Link href="/cart">
                <img src="/img/icons/cart.png" alt="" />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}


export default Top
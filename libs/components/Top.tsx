import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material"
import PardaTop from "./TopParda"

const Top = () => {
  return (
    <>
      <Stack className="navbar">
        <PardaTop/>
        <Stack className="navbar-main"></Stack>
      </Stack>
    </>
  )
}


export default Top
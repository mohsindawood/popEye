import * as React from "react";
// material
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link, Stack, Badge, Avatar } from "@mui/material";
import VolumeMuteRoundedIcon from "@mui/icons-material/VolumeMuteRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
// styles
const RootStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  background: "none",
  color: "#000",
  "& .MuiToolbar-root": {
    background: "none",
    justifyContent: "space-between",
    "& .MuiLink-root": {
      fontFamily: "Readex Pro",
    },
    "& .border-link": {
      position: "relative",
      "& .bordered": {
        position: "absolute",
        left: 0,
        bottom: -10,
        width: "100%",
        height: "2px",
        background: "#1976d2",
        borderRadius: "20px 20px 0px 0px",
      },
    },
    "& .mute-btn": {
      borderRadius: "50px",
      boxShadow: "none",
      fontFamily: "Readex Pro",
      textTransform: "capitalize",
      background: "#F0F9FF",
    },
  },
}));

export default function ButtonAppBar() {
  return (
    <RootStyled position="static">
      <Toolbar>
        <Stack direction="row" alignItems="center" spacing={8}>
          <Link>
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Link
              variant="subtitle2"
              underline="none"
              color="primary"
              fontWeight={500}
              href="#"
              className="border-link"
            >
              Overview
              <Box className="bordered" />
            </Link>
            <Link
              variant="subtitle2"
              underline="none"
              color="text.primary"
              fontWeight={500}
              href="#"
            >
              Pools
            </Link>
            <Badge color="error" variant="dot">
              <Link
                variant="subtitle2"
                underline="none"
                color="text.primary"
                fontWeight={500}
                href="#"
              >
                Alerts
              </Link>
            </Badge>

            <Link
              variant="subtitle2"
              underline="none"
              color="text.primary"
              fontWeight={500}
              href="#"
            >
              Market
            </Link>
            <Link
              variant="subtitle2"
              underline="none"
              color="text.primary"
              fontWeight={500}
              href="#"
            >
              Settings
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            variant="contained"
            className="mute-btn"
            startIcon={<VolumeMuteRoundedIcon />}
          >
            Mute Alarm
          </Button>
          <Button
            color="inherit"
            variant="text"
            endIcon={<ArrowDropDownRoundedIcon />}
          >
            <Avatar />
          </Button>
        </Stack>
      </Toolbar>
    </RootStyled>
  );
}

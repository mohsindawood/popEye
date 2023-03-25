import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// styles
const RootStyled = styled(Card)(({ theme }) => ({
  border: "none",
  borderRadius: "12px",
  boxShadow: "none",
  "& .MuiCardContent-root": {
    // paddingBottom: theme.spacing(0),
    padding: theme.spacing(3, 3, 0, 3),
  },
  button: {
    minWidth: 40,
    borderRadius: "8px",
    boxShadow: "none",
    fontFamily: "Readex Pro",
    textTransform: "capitalize",
    fontSize: 12,
    background: "#BFDBFE",
    "&.color-btn": {
      background: "#EFF6FF",
    },
  },
  "& .img-sec": {
    position: "relative",
    overflow: "hidden",
    height: 210,
    "&:before": {
      content: '""',
      position: "absolute",
      background: "url(/images/shipcard1.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      width: "100%",
      height: "300px",
      left: "35%",
      bottom: 0,
      transform: "translateX(-50%)",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      background: "url(/images/line.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      width: "100%",
      height: "150px",
      left: "50%",
      bottom: 0,
      transform: "translateX(-50%)",
    },
  },
}));

export default function TensionCard() {
  return (
    <RootStyled>
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <Typography
              variant="body2"
              color="text.secondary"
              fontFamily="Readex Pro"
            >
              Tension
            </Typography>
            <Typography variant="h5" fontFamily="Readex Pro" fontSize={22}>
              Medium-tight
              <Typography
                variant="h5"
                component="span"
                fontFamily="Readex Pro"
                color="text.secondary"
                fontSize={22}
              >
                (42 tons)
              </Typography>
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button size="small" color="inherit" variant="contained">
              live
            </Button>
            <Button
              size="small"
              color="inherit"
              variant="contained"
              className="color-btn"
            >
              1H
            </Button>
          </Stack>
        </Stack>
        <Box className="img-sec" id="img-sec">
          <div class="gauge1"></div>
        </Box>
      </CardContent>
    </RootStyled>
  );
}

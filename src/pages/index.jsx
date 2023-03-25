import {
  Container,
  Grid,
  Box,
  IconButton,
  Stack,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CheckIcon from "@mui/icons-material/Check";
import DirectionCard from "../components/directionCard";
import TensionCard from "../components/tensionCard";

export default function Home() {
  return (
    <Box py={3}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item sm={12} md={8}>
            <Box
              sx={{
                position: "relative",
                ".icon-btn": {
                  position: "absolute",
                  height: 56,
                  width: 56,
                  borderRadius: "12px",
                  background: "rgba(191, 219, 254, 0.65)",
                  right: 13,
                  top: 15,
                },
                img: {
                  height: 713,
                  borderRadius: "12px",
                  objectFit: "cover",
                },
              }}
            >
              <img src="/images/ship.svg" alt="ship" width="100%" />
              <IconButton className="icon-btn">
                <FullscreenIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Stack spacing={2.5}>
              <Card
                sx={{
                  bgcolor: "rgba(217, 249, 157, 1)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "none",
                  "& .MuiCardContent-root": {
                    p: 3,
                  },
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <CheckIcon fontSize="large" />
                    <Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontFamily="Readex Pro"
                      >
                        Status
                      </Typography>
                      <Typography variant="h5" fontFamily="Readex Pro">
                        All good!
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
              <DirectionCard />
              <TensionCard />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

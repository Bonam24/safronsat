"use client";

import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        height: { xs: "100vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity:1,
        }}
      >
        <source src="/images/backgroundvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* Dark overlay for contrast */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Star overlay (optional aesthetic) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0, 0, 0, 0))
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          zIndex: 2,
        }}
      />

      {/* Animated Content */}
      <Container sx={{ position: "relative", zIndex: 3 }}>
        <Box sx={{ maxWidth: "md", mx: "auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="outlined" size="large" color="inherit">
                  Discover our mission
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="#tech"
                  sx={{ textDecoration: "none" }}
                >
                  View our technology
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

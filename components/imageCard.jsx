"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";

export default function CenteredCard({ text, image }) {
  return (
    <Card
      sx={{
        position: "relative",
        height: 300,
        width: 500,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 4,
        borderRadius: 4,
        overflow: "hidden",
        transition: "transform 0.4s ease-in-out",
        transform: "scale(1)",
        "&:hover": {
          transform: "scale(0.95)", // Zooms out slightly
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: 3,
          py: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            letterSpacing: "0.1em",
            fontSize: "1.2rem",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

"use client";

import { Typography, Box, Divider } from "@mui/material";
import CardGrid from "@/components/cardGrid";

const cardData = [
  {
    text: "Safron-1",
    image: "/images/satellite1.jpg",
  },
  {
    text: "Night Lights",
    image: "/images/satellite2.jpg",
  },
  {
    text: "Launch",
    image: "/images/satellite3.gif",
  },
  {
    text: "Connect & Monitor",
    image: "/images/satellite4.png",
  },
];

export default function ServiceSection() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          fontFamily: 'sans-serif',
          letterSpacing: "0.1em",
          mb: 2,
        }}
      >
        SERVICES
      </Typography>

      

      <CardGrid cards={cardData} />
      <Divider sx={{ width: '100%', mb: 4, borderColor: '#ccc' }} />
    </Box>
  );
}

"use client";

import { Grid, Container } from "@mui/material";
import CenteredCard from "@/components/imageCard";

export default function CardGrid({ cards }) {
  return (
    <Container sx={{ py: 4 }}>
      <Grid 
        container 
        spacing={6} 
        justifyContent="center"
      >
        {cards.map((card, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={6} // Changed from md={4} to md={6} to allow each card more horizontal space
            key={index}
            sx={{
              maxWidth: '600px', // Increased card max width
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CenteredCard text={card.text} image={card.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

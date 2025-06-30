import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const AboutPage = () => {
  const theme = useTheme();

  const StyledBox = styled(Box)({
    backgroundColor: '#000000',
    color: '#ffffff',
    minHeight: '100vh',
    padding: theme.spacing(8, 0),
  });

  const SectionHeader = styled(Typography)({
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    textTransform: 'uppercase',
    letterSpacing: 2,
  });

  const MissionStatement = styled(Typography)({
    fontSize: '1.5rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(4),
    fontWeight: 300,
  });

  const FeatureCard = styled(Box)({
    padding: theme.spacing(3),
    borderLeft: '4px solid #ffffff',
    marginBottom: theme.spacing(3),
  });

  return (
    <StyledBox>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <SectionHeader variant="h2" component="h1" align="center" gutterBottom>
              About NovaSpace
            </SectionHeader>
            <MissionStatement align="center">
              NovaSpace is reimagining space access for the world's emerging economies.
            </MissionStatement>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              We design, manufacture, and launch reusable small satellites to democratize access to space technology.
            </Typography>
            <Typography paragraph>
              Space shouldn't be a luxury. At NovaSpace, we're building it for everyone.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Technology
            </Typography>
            <Typography paragraph>
              NovaSpace builds reusable satellite systems designed for earth observation, climate monitoring, and real-time security intelligence.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <FeatureCard>
              <Typography variant="h5" component="h3" gutterBottom>
                Vertically Integrated Platform
              </Typography>
              <Typography>
                Built with efficiency at our core, our vertically integrated platform empowers governments, innovators, and institutions in underserved regions to deploy satellite solutions on their own terms.
              </Typography>
            </FeatureCard>

            <FeatureCard>
              <Typography variant="h5" component="h3" gutterBottom>
                Diverse Applications
              </Typography>
              <Typography>
                Whether it's earth observation, IoT, or low-cost broadband, we help you launch faster — and smarter.
              </Typography>
            </FeatureCard>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              Join Us in Building the Future of Space
            </Typography>
            <Typography align="center">
              NovaSpace is committed to making space technology accessible to all nations and communities.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default AboutPage;
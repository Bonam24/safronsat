"use client";
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  useTheme, 
  Divider,
  List,
  ListItem,
  ListItemText,
  Link
} from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '@/components/navbar';

const AboutPage = () => {
  const theme = useTheme();

  const StyledBox = styled(Box)({
    backgroundColor: '#000000',
    color: '#ffffff',
    minHeight: '100vh',
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  });

  const SectionHeader = styled(Typography)({
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    textTransform: 'uppercase',
    letterSpacing: 2,
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  });

  const MissionStatement = styled(Typography)({
    fontSize: '1.5rem',
    lineHeight: 1.6,
    marginBottom: theme.spacing(6),
    fontWeight: 300,
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  });

  const FeatureCard = styled(Box)({
    padding: theme.spacing(4),
    borderLeft: '4px solid #ffffff',
    marginBottom: theme.spacing(4),
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  });

  const SectionTitle = styled(Typography)({
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    position: 'relative',
    display: 'inline-block',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: -8,
      left: 0,
      width: '50%',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
    },
  });

  return (
    <StyledBox>
      <Navbar />
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Box sx={{ pt: 8, pb: 6 }}>
          <SectionHeader variant="h2" component="h1" align="center" gutterBottom>
            About NovaSpace
          </SectionHeader>
          <MissionStatement align="center">
            NovaSpace is reimagining space access for the world's emerging economies.
          </MissionStatement>
          <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        </Box>

        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <SectionTitle variant="h3" component="h2">
              Our Mission
            </SectionTitle>
            <Typography paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
              We design, manufacture, and launch reusable small satellites to democratize access to space technology.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              Space shouldn't be a luxury. At NovaSpace, we're building it for everyone.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <SectionTitle variant="h3" component="h2">
              Our Technology
            </SectionTitle>
            <Typography paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
              NovaSpace builds reusable satellite systems designed for earth observation, climate monitoring, and real-time security intelligence.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 8 }}>
          <Grid item xs={12}>
            <FeatureCard>
              <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                Vertically Integrated Platform
              </Typography>
              <Typography sx={{ fontSize: '1.1rem' }}>
                Built with efficiency at our core, our vertically integrated platform empowers governments, innovators, and institutions in underserved regions to deploy satellite solutions on their own terms.
              </Typography>
            </FeatureCard>

            <FeatureCard>
              <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                Diverse Applications
              </Typography>
              <Typography sx={{ fontSize: '1.1rem' }}>
                Whether it's earth observation, IoT, or low-cost broadband, we help you launch faster — and smarter.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', py: 6 }}>
          <SectionTitle variant="h3" component="h2" align="center" sx={{ 
            '&:after': {
              left: '25%',
              width: '50%',
            }
          }}>
            Join Us in Building the Future of Space
          </SectionTitle>
          <Typography align="center" sx={{ fontSize: '1.2rem', maxWidth: '700px', mx: 'auto' }}>
            NovaSpace is committed to making space technology accessible to all nations and communities.
          </Typography>
        </Box>
      </Container>

      {/* Footer Section */}
      <Box sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
        <Container sx={{ py: 6 }}>
          <Grid container spacing={8} sx={{ mb: 6 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 3 }}>
                Novaspace
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Building the future of satellite technology for Africa and beyond.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={2.5} sx={{ pl: 4 }}>
              <Typography variant="overline" sx={{ display: "block", mb: 3, color: "rgba(255, 255, 255, 0.7)" }}>
                Company
              </Typography>
              <List disablePadding>
                {["About Us", "Our Mission", "Leadership", "Careers", "News"].map((item) => (
                  <ListItem key={item} disablePadding sx={{ pb: 1 }}>
                    <ListItemText
                      primary={
                        <Link href="#" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
                          {item}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} sm={4} md={2.5} sx={{ pl: 4 }}>
              <Typography variant="overline" sx={{ display: "block", mb: 3, color: "rgba(255, 255, 255, 0.7)" }}>
                Services
              </Typography>
              <List disablePadding>
                {["Safron-1", "Night-Lights", "Launch", "Connect & Monitor"].map(
                  (item) => (
                    <ListItem key={item} disablePadding sx={{ pb: 1 }}>
                      <ListItemText
                        primary={
                          <Link href="#" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
                            {item}
                          </Link>
                        }
                      />
                    </ListItem>
                  ),
                )}
              </List>
            </Grid>

            <Grid item xs={12} sm={4} md={2.5} sx={{ pl: 4 }}>
              <Typography variant="overline" sx={{ display: "block", mb: 3, color: "rgba(255, 255, 255, 0.7)" }}>
                Connect
              </Typography>
              <List disablePadding>
                {["Contact Us", "Investor Relations", "Partnership Inquiries", "Media Kit"].map((item) => (
                  <ListItem key={item} disablePadding sx={{ pb: 1 }}>
                    <ListItemText
                      primary={
                        <Link href="#" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
                          {item}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 3, backgroundColor: 'rgba(255,255,255,0.2)' }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "center" },
              gap: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
              © {new Date().getFullYear()} Novaspace. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
                Terms of Service
              </Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
                Cookie Policy
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </StyledBox>
  );
};

export default AboutPage;
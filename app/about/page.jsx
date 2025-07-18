"use client";
import React, { useEffect } from 'react';
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
  Link,
  Fade,
  Grow
} from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '@/components/navbar';

// Import Urbanist font
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const AboutPage = () => {
  const theme = useTheme();

  useEffect(() => {
    // Preload the font
    document.body.classList.add(urbanist.className);
  }, []);

  const StyledBox = styled(Box)({
    backgroundColor: '#000000',
    color: '#ffffff',
    minHeight: '100vh',
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(30, 30, 30, 0.9) 0%, rgba(0, 0, 0, 1) 100%)',
    fontFamily: urbanist.style.fontFamily,
  });

  const SectionHeader = styled(Typography)({
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    textTransform: 'uppercase',
    letterSpacing: 3,
    position: 'relative',
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: -12,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40%',
      height: '4px',
      background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
    },
  });

  const MissionStatement = styled(Typography)({
    fontSize: '1.6rem',
    lineHeight: 1.7,
    marginBottom: theme.spacing(6),
    fontWeight: 300,
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    padding: theme.spacing(3),
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    borderLeft: '3px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  });

  const FeatureCard = styled(Box)({
    padding: theme.spacing(4),
    borderRadius: '8px',
    marginBottom: theme.spacing(4),
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    background: 'rgba(20, 20, 20, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      transform: 'translateY(-8px)',
      background: 'rgba(30, 30, 30, 0.7)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
  });

  const SectionTitle = styled(Typography)({
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    position: 'relative',
    display: 'inline-block',
    paddingBottom: theme.spacing(1),
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '50%',
      height: '3px',
      background: 'linear-gradient(90deg, #ffffff, rgba(255,255,255,0))',
    },
  });

  const GlowingDot = styled('div')({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#ffffff',
    boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.7)',
    marginRight: theme.spacing(1.5),
    flexShrink: 0,
    marginTop: '8px',
  });

  return (
    <StyledBox className={urbanist.className}>
      <Navbar />
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Box sx={{ pt: 8, pb: 6 }}>
          <Fade in={true} timeout={800}>
            <Box>
              <SectionHeader variant="h2" component="h1" align="center" gutterBottom>
                About novaSpace
              </SectionHeader>
              <MissionStatement align="center">
                NovaSpace is reimagining space access for the world's emerging economies.
              </MissionStatement>
              <Divider sx={{ 
                my: 4, 
                backgroundColor: 'rgba(255,255,255,0.2)',
                height: '1px',
                backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)'
              }} />
            </Box>
          </Fade>
        </Box>

        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grow in={true} timeout={1000}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="flex-start">
                <GlowingDot />
                <Box>
                  <SectionTitle variant="h3" component="h2">
                    Our Mission
                  </SectionTitle>
                  <Typography paragraph sx={{ fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
                    We design, manufacture, and launch reusable small satellites to democratize access to space technology.
                  </Typography>
                  <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Space shouldn't be a luxury. At NovaSpace, we're building it for everyone.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grow>
          
          <Grow in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="flex-start">
                <GlowingDot />
                <Box>
                  <SectionTitle variant="h3" component="h2">
                    Our Technology
                  </SectionTitle>
                  <Typography paragraph sx={{ fontSize: '1.1rem', mb: 3, lineHeight: 1.8 }}>
                    NovaSpace builds reusable satellite systems designed for earth observation, climate monitoring, and real-time security intelligence.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grow>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 8 }}>
          <Grid item xs={12}>
            <Grow in={true} timeout={800}>
              <FeatureCard>
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <Box component="span" sx={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.8)', 
                    display: 'inline-block', 
                    mr: 2,
                    boxShadow: '0 0 12px rgba(255,255,255,0.5)'
                  }} />
                  Vertically Integrated Platform
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8, pl: 4 }}>
                  Built with efficiency at our core, our vertically integrated platform empowers governments, innovators, and institutions in underserved regions to deploy satellite solutions on their own terms.
                </Typography>
              </FeatureCard>
            </Grow>

            <Grow in={true} timeout={800} style={{ transitionDelay: '200ms' }}>
              <FeatureCard>
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <Box component="span" sx={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.8)', 
                    display: 'inline-block', 
                    mr: 2,
                    boxShadow: '0 0 12px rgba(255,255,255,0.5)'
                  }} />
                  Diverse Applications
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8, pl: 4 }}>
                  Whether it's earth observation, IoT, or low-cost broadband, we help you launch faster — and smarter.
                </Typography>
              </FeatureCard>
            </Grow>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Fade in={true} timeout={1000}>
            <Box>
              <SectionTitle variant="h3" component="h2" align="center" sx={{ 
                '&:after': {
                  left: '25%',
                  width: '50%',
                }
              }}>
                Join Us in Building the Future of Space
              </SectionTitle>
              <Typography align="center" sx={{ 
                fontSize: '1.2rem', 
                maxWidth: '700px', 
                mx: 'auto',
                background: 'rgba(255,255,255,0.03)',
                padding: theme.spacing(3),
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}>
                NovaSpace is committed to making space technology accessible to all nations and communities.
              </Typography>
            </Box>
          </Fade>
        </Box>
      </Container>

      {/* Footer Section */}
      <Box sx={{ 
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        background: 'rgba(10, 10, 10, 0.7)',
        backdropFilter: 'blur(4px)',
      }}>
        <Container sx={{ py: 6 }}>
          <Grid container spacing={8} sx={{ mb: 6 }}>
            <Grid item xs={12} md={3}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 400,
                  fontSize: "2rem",
                  fontFamily: "'Urbanist', sans-serif",
                  letterSpacing: "0em",
                  textTransform: 'lowercase',
                  mb: 3,
                }}
              >
                novaspace
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.7 }}>
                Building the future of satellite technology for Africa and beyond.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={2.5} sx={{ pl: 4 }}>
              <Typography variant="overline" sx={{ 
                display: "block", 
                mb: 3, 
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 600,
                letterSpacing: 1.5,
              }}>
                Company
              </Typography>
              <List disablePadding>
                {["About Us", "Our Mission", "Leadership", "Careers", "News"].map((item, index) => (
                  <ListItem key={item} disablePadding sx={{ pb: 1.5 }}>
                    <ListItemText
                      primary={
                        <Link href="#" sx={{ 
                          color: "rgba(255, 255, 255, 0.7)", 
                          textDecoration: "none",
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          '&:hover': {
                            color: '#ffffff',
                            textDecoration: 'underline',
                          }
                        }}>
                          <Box component="span" sx={{ 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            background: 'rgba(255,255,255,0.5)', 
                            display: 'inline-block', 
                            mr: 1.5,
                          }} />
                          {item}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} sm={4} md={2.5} sx={{ pl: 4 }}>
              <Typography variant="overline" sx={{ 
                display: "block", 
                mb: 3, 
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 600,
                letterSpacing: 1.5,
              }}>
                Services
              </Typography>
              <List disablePadding>
                {["Manufacturing", "Launch",].map(
                  (item) => (
                    <ListItem key={item} disablePadding sx={{ pb: 1.5 }}>
                      <ListItemText
                        primary={
                          <Link href="#" sx={{ 
                            color: "rgba(255, 255, 255, 0.7)", 
                            textDecoration: "none",
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            '&:hover': {
                              color: '#ffffff',
                              textDecoration: 'underline',
                            }
                          }}>
                            <Box component="span" sx={{ 
                              width: '6px', 
                              height: '6px', 
                              borderRadius: '50%', 
                              background: 'rgba(255,255,255,0.5)', 
                              display: 'inline-block', 
                              mr: 1.5,
                            }} />
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
              <Typography variant="overline" sx={{ 
                display: "block", 
                mb: 3, 
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 600,
                letterSpacing: 1.5,
              }}>
                Connect
              </Typography>
              <List disablePadding>
                {["Contact Us", "Investor Relations", "Partnership Inquiries", "Media Kit"].map((item) => (
                  <ListItem key={item} disablePadding sx={{ pb: 1.5 }}>
                    <ListItemText
                      primary={
                        <Link href="#" sx={{ 
                          color: "rgba(255, 255, 255, 0.7)", 
                          textDecoration: "none",
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          '&:hover': {
                            color: '#ffffff',
                            textDecoration: 'underline',
                          }
                        }}>
                          <Box component="span" sx={{ 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            background: 'rgba(255,255,255,0.5)', 
                            display: 'inline-block', 
                            mr: 1.5,
                          }} />
                          {item}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Divider sx={{ 
            mb: 3, 
            backgroundColor: 'rgba(255,255,255,0.1)',
            height: '1px',
            backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
          }} />

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
            <Box sx={{ display: "flex", gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="#" sx={{ 
                color: "rgba(255, 255, 255, 0.7)", 
                textDecoration: "none",
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#ffffff',
                  textDecoration: 'underline',
                }
              }}>
                Privacy Policy
              </Link>
              <Link href="#" sx={{ 
                color: "rgba(255, 255, 255, 0.7)", 
                textDecoration: "none",
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#ffffff',
                  textDecoration: 'underline',
                }
              }}>
                Terms of Service
              </Link>
              <Link href="#" sx={{ 
                color: "rgba(255, 255, 255, 0.7)", 
                textDecoration: "none",
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#ffffff',
                  textDecoration: 'underline',
                }
              }}>
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
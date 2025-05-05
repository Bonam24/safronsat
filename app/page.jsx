"use client"
import Navbar from "@/components/navbar"
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { ArrowForward, Satellite, Rocket, Storage, Public, People, Analytics } from "@mui/icons-material"
import Link from "next/link"
import '@/styles/globals.css'
import ServiceSection from "@/components/serviceSection"
import HeroSection from "@/components/heroSection"

// Create a custom theme with black and white colors
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "12px 24px",
        },
        outlined: {
          borderColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#000000",
          },
        },
        contained: {
          backgroundColor: "#ffffff",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          borderRadius: 0,
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: 0,
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff",
            },
          },
        },
      },
    },
  },
})


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
        <Navbar />

        {/* Hero Section */}
        <HeroSection/>

        {/* Mission Section */}
        {/* <Box sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
          <Container sx={{ py: { xs: 8, md: 12 } }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 3 }}>
                  Our mission for Africa
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
                  Safronx is dedicated to transforming Africa's technological landscape through advanced satellite
                  solutions. We believe that space technology can bridge the digital divide and create unprecedented
                  opportunities for economic growth, education, and connectivity across the continent.
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
                  By 2030, our goal is to deploy a constellation of satellites specifically designed to address Africa's
                  unique challenges and unlock its vast potential.
                </Typography>
                <Button
                  component={Link}
                  href="#"
                  endIcon={<ArrowForward />}
                  sx={{
                    p: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                      "& .MuiSvgIcon-root": { transform: "translateX(4px)" },
                    },
                    "& .MuiSvgIcon-root": { transition: "transform 0.2s" },
                  }}
                >
                  Learn more about our vision
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    height: 400,
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Box
                    component="img"
                    src="/placeholder.svg?height=800&width=600"
                    alt="African landscape"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    }}
                  >
                    <Typography variant="overline" sx={{ color: "text.secondary", display: "block" }}>
                      Connecting the unconnected
                    </Typography>
                    <Typography variant="h6" component="h3">
                      Bringing connectivity to remote regions
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box> */}

        {/* Services Section */}
          <ServiceSection/>





        {/* Technology Section */}
        <Box sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
          <Container sx={{ py: { xs: 8, md: 12 } }}>
            <Grid container spacing={8} alignItems="center">
              <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                {/* <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: "-16px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 0,
                      zIndex: -1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: "-8px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: 0,
                      zIndex: -1,
                    }}
                  />
                  <Card>
                    <CardMedia
                      component="img"
                      image="/images/hero-f.png"
                      alt="Satellite technology"
                      sx={{ width: "100%", height: "auto" }}
                    />
                  </Card>
                </Box> */}
              </Grid>
              <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }} id="tech">
                <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 3 }}>
                  Cutting-edge Technology
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                  Our satellites incorporate the latest advancements in miniaturization, power efficiency, and
                  communication technologies. Designed specifically for Africa's unique challenges, our technology
                  delivers reliable performance in the most demanding conditions.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    >
                      01
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                        Advanced Propulsion Systems
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        Electric propulsion technology for precise orbital positioning and extended operational
                        lifespan.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    >
                      02
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                        High-Resolution Imaging
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        Multi-spectral sensors capable of capturing detailed imagery for various applications.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    >
                      03
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                        Advanced Communication Systems
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        High-bandwidth, low-latency communication technology for seamless data transmission.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>


        {/* News Section */}
        {/* <Box sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
          <Container sx={{ py: { xs: 8, md: 12 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                mb: 8,
              }}
            >
              <Box>
                <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1 }}>
                  Latest News
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Stay updated with our latest developments and industry insights.
                </Typography>
              </Box>
              <Button
                component={Link}
                href="#"
                endIcon={<ArrowForward />}
                sx={{
                  mt: { xs: 2, md: 0 },
                  p: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    "& .MuiSvgIcon-root": { transform: "translateX(4px)" },
                  },
                  "& .MuiSvgIcon-root": { transition: "transform 0.2s" },
                }}
              >
                View all news
              </Button>
            </Box>

            <Grid container spacing={4}>
              {[
                {
                  title: "Successful Launch of SafronX",
                  date: "February 8, 2025",
                  excerpt:
                    "Third satellite in constellation successfully deployed, expanding coverage across Eastern Africa.",
                },
              ].map((news, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      transition: "background-color 0.3s",
                      "&:hover": { bgcolor: "rgba(255, 255, 255, 0.05)" },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="/placeholder.svg?height=400&width=600"
                      alt={news.title}
                      sx={{
                        aspectRatio: "16/9",
                        transition: "transform 0.3s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                    <CardContent>
                      <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                        {news.date}
                      </Typography>
                      <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                        {news.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                        {news.excerpt}
                      </Typography>
                      <Button
                        component={Link}
                        href="#"
                        endIcon={<ArrowForward />}
                        sx={{
                          p: 0,
                          "&:hover": {
                            backgroundColor: "transparent",
                            "& .MuiSvgIcon-root": { transform: "translateX(4px)" },
                          },
                          "& .MuiSvgIcon-root": { transition: "transform 0.2s" },
                        }}
                      >
                        Read more
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box> */}

        {/* Contact Section */}
        <Box>
          <Container sx={{ py: { xs: 8, md: 12 } }}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={5}>
                <Typography variant="h2" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 3 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                  Interested in learning more about our satellite solutions or exploring partnership opportunities? Our
                  team is ready to assist you.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
                  <Box>
                    <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 0.5 }}>
                      Headquarters
                    </Typography>
                    <Typography variant="body1">68 chalbi dr , Lavington</Typography>
                    <Typography variant="body1">Nairobi, Kenya</Typography>
                  </Box>
                  {/* location 2 */}
                  <Box>
                    <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 0.5 }}>
                      Headquarters 2
                    </Typography>
                    <Typography variant="body1">1710-Atrisco-Dr, Albuquerque</Typography>
                    <Typography variant="body1">New Mexico, United States</Typography>
                  </Box>

                  <Box>
                    <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 0.5 }}>
                      Email
                    </Typography>
                    <Typography variant="body1">tech@safronsat.com</Typography>
                  </Box>

                  {/* <Box>
                    <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 0.5 }}>
                      Phone
                    </Typography>
                    <Typography variant="body1">+254 (0) 123 456 789</Typography>
                  </Box> */}
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <Card sx={{ p: 4 }}>
                  <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                          Name
                        </Typography>
                        <TextField fullWidth variant="outlined" />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                          Email
                        </Typography>
                        <TextField fullWidth variant="outlined" />
                      </Grid>
                    </Grid>

                    <Box>
                      <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                        Subject
                      </Typography>
                      <TextField fullWidth variant="outlined" />
                    </Box>

                    <Box>
                      <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                        Message
                      </Typography>
                      <TextField fullWidth variant="outlined" multiline rows={5} />
                    </Box>

                    <Button variant="contained" size="large" fullWidth>
                      Send Message
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
  <Container sx={{ py: 6 }}>
    <Grid container spacing={8} sx={{ mb: 6 }}> {/* Increased spacing from 4 to 8 */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 3 }}>
          SAFRONSAT
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Building the future of satellite technology for Africa and beyond.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={4} md={2.5} sx={{ pl: 4 }}> {/* Reduced md size and added left padding */}
        <Typography variant="overline" sx={{ display: "block", mb: 3 }}>
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

      <Grid item xs={12} sm={4} md={2.5} sx={{ pl: 4 }}> {/* Reduced md size and added left padding */}
        <Typography variant="overline" sx={{ display: "block", mb: 3 }}>
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

      <Grid item xs={12} sm={4} md={2.5} sx={{ pl: 4 }}> {/* Reduced md size and added left padding */}
        <Typography variant="overline" sx={{ display: "block", mb: 3 }}>
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

    <Divider sx={{ mb: 3 }} />

    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "center" },
        gap: { xs: 2, md: 0 },
      }}
    >
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        © {new Date().getFullYear()} Safronsat. All rights reserved.
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
      </Box>
    </ThemeProvider>
  )
}

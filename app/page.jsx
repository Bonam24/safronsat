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

       

        {/* Services Section */}
          {/* <ServiceSection/> */}





        {/* Technology Section */}
        <Box sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
          <Container sx={{ py: { xs: 8, md: 12 } }}>
            <Grid container spacing={8} alignItems="center">
              <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                
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

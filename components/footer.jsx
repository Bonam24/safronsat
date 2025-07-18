export default function Footer() {
  return (
    <>
      <Box sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
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
                        <Link href="/about" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
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
    </>
  )
}
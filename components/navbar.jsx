"use client"
import { useState } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material"
import {
  KeyboardArrowDown,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material"
import Link from "next/link"

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setDrawerOpen(open)
  }

  const toggleMobileExpand = () => {
    setMobileExpanded(!mobileExpanded)
  }

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}
    >
      <Toolbar sx={{ height: 80 }}>
        <Link href="/" passHref>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700, // Changed from 400 to 700 for bolder text
              fontSize: "1.5rem",
              letterSpacing: "0.1em",
              textTransform: 'uppercase'
            }}
          >
            NOVASPACE
          </Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />
        
        {/* About Button */}
        <Link href="/about" passHref>
          <Button
            color="inherit"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "0.875rem",
              marginRight: 2,
            }}
          >
            About
          </Button>
        </Link>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
          <Button
            color="inherit"
            endIcon={<KeyboardArrowDown />}
            onClick={handleClick}
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "0.875rem",
            }}
          >
            Investor Relations
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                bgcolor: "black",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 0,
                mt: 1,
              },
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{ color: "white", "&:hover": { bgcolor: "rgba(255, 255, 255, 0.05)" } }}
            >
              Pitch Deck
            </MenuItem>
          </Menu>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              bgcolor: "black",
              width: 280,
              p: 2,
            },
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              NOVASPACE
            </Typography>
          </Box>

          <List>
            <ListItemButton onClick={toggleMobileExpand}>
              <ListItemText
                primary="Investor Relations"
                primaryTypographyProps={{
                  sx: {
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontSize: "0.875rem",
                  },
                }}
              />
              {mobileExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={mobileExpanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Pitch Deck" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Financials" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* About Link in Drawer */}
            <Link href="/about" passHref>
              <ListItemButton>
                <ListItemText
                  primary="About"
                  primaryTypographyProps={{
                    sx: {
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontSize: "0.875rem",
                    },
                  }}
                />
              </ListItemButton>
            </Link>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
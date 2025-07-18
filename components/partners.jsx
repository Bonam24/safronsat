'use client';
import React from 'react';
import { Container, Typography, Tooltip, Box, Divider, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const partners = [
  { name: ' Rocket labs', logo: '/rocketlab.png' },
  { name: 'KSA - National Regulator', logo: '/Kenya-Space-Agency.webp' },
  { name: 'Elodin - Systems development Board ', logo: '/elodin.png' },
  { name: 'iqps - technical support & development', logo: '/iqps.png' },
];

// Animation for marquee
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// Outer marquee container (hides overflow)
const MarqueeWrapper = styled(Box)({
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
});

// Inner container (moves logos)
const MarqueeInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6),
  animation: `${scroll} 40s linear infinite`,
}));

const LogoBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  minWidth: 120,
  maxWidth: 150,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const PartnersSection = () => {
  const theme = useTheme();

  return (
    <>
      {/* Full-width Divider */}
      <Box sx={{ width: '100%', bgcolor: theme.palette.background.default }}>
        <Divider sx={{ borderBottomWidth: 2 }} />
      </Box>

      <Box py={8} bgcolor={theme.palette.background.default}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
            Our Trusted Partners
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={4}>
            We are proud to collaborate with the following organizations.
          </Typography>

          <MarqueeWrapper>
            <MarqueeInner>
              {partners.concat(partners).map((partner, index) => (
                <Tooltip title={partner.name} key={index}>
                  <LogoBox>
                    <Box
                      component="img"
                      src={partner.logo}
                      alt={partner.name}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        maxHeight: 80,
                        mx: 'auto',
                      }}
                    />
                  </LogoBox>
                </Tooltip>
              ))}
            </MarqueeInner>
          </MarqueeWrapper>
        </Container>
      </Box>
    </>
  );
};

export default PartnersSection;

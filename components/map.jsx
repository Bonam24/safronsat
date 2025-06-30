"use client";
import { Box } from '@mui/material';

const LocationMap = () => {
  return (
    <Box sx={{ 
      width: { xs: '100%', md: '700px' }, // 100% on small, 700px on medium+ screens
      height: '350px',
      borderRadius: '4px',
      overflow: 'hidden',
      boxShadow: 4,
      mt: 6,
      mb: 4,
      mx: 'auto' // Center the map horizontally
    }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.899448633845!2d-106.6838224!3d35.0626764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220d1b42a1129d%3A0x7f67b3e5a6e6b1b5!2s1710%20Atrisco%20Dr%20NW%2C%20Albuquerque%2C%20NM%2087120%2C%20USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default LocationMap;
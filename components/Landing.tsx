'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Landing() {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const handleGetStarted = () => {
    router.push('/chat');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)', // Blue gradient background
        textAlign: 'center',
        p: 3,
        color: '#fff',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '4rem' }, // Adjusted font size
            color: '#fff',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
            letterSpacing: '1.5px', // Reduced letter spacing for a cleaner look
          }}
        >
          Discover the Best Professors
        </Typography>
        <Typography
          variant="h6"
          paragraph
          sx={{
            fontSize: { xs: '1.1rem', md: '1.6rem' }, // Adjusted font size
            maxWidth: '700px', // Adjusted max width
            mx: 'auto',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
            lineHeight: 1.4, // Improved readability
          }}
        >
          Connect with our chatbot to explore detailed feedback and ratings on professors. Get the insights you need to make the best choices for your academic journey!
        </Typography>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1, backgroundColor: '#004080' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Button
          variant="contained"
          sx={{
            mt: 5,
            bgcolor: '#0044cc', // New button color
            '&:hover': { bgcolor: '#0033aa' }, // Hover color
            px: 5, // Adjusted padding
            py: 2, // Adjusted padding
            fontSize: '1.2rem', // Adjusted font size
            borderRadius: '30px', // Adjusted border radius
            textTransform: 'none',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)', // Adjusted shadow
            transition: 'transform 0.3s, background-color 0.3s', // Smooth transition
          }}
          onClick={handleGetStarted}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? 'Let’s Go!' : 'Get Started'}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 20, // Adjusted position
          fontSize: '1rem', // Adjusted font size
          color: 'rgba(255, 255, 255, 0.8)',
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Explore More Below
      </motion.div>
    </Box>
  );
}

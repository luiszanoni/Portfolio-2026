'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.05); opacity: 0.5; }
  100% { transform: scale(1); opacity: 0.3; }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    'Desenvolvedor Full Stack',
    'Software Engineer',
    'Criador de soluções digitais'
  ];

  useEffect(() => {
    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          
          setTimeout(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            setTypedText('');
          }, 2000);
        }
      }, 100);
    };

    typeWriter();
    
    return () => {
      // Cleanup
    };
  }, [currentPhraseIndex]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b, #0f172a)',
        position: 'relative',
        pt: { xs: 10, md: 0 },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' } }}>
                Olá, sou <Typography component="span" variant="inherit" color="primary">Luis Gustavo Zanoni</Typography>
              </Typography>
              
              <Box sx={{ minHeight: '3rem', mb: 4, display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                <Typography variant="h4" color="text.secondary" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  <Box component="span" sx={{ color: 'primary.main' }}>{typedText}</Box>
                  <Box component="span" sx={{ animation: 'pulse 1s infinite' }}>|</Box>
                </Typography>
              </Box>
              
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: { xs: 'auto', lg: 0 } }}>
                Sou um desenvolvedor apaixonado por criar experiências digitais incríveis. 
                Com expertise em tecnologias modernas, transformo ideias em realidade através de código limpo e design inovador.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' }, mb: 4 }}>
                <Button variant="contained" color="primary" size="large" href="#projects">
                  Ver Projetos
                </Button>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                <IconButton color="inherit" href="https://github.com/luiszanoni" target="_blank">
                  <GitHubIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.linkedin.com/in/luiszanoni/" target="_blank">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 300, lg: 500 },
                  height: { xs: 300, lg: 500 },
                  borderRadius: '50%',
                  background: 'linear-gradient(to right, #2563eb, #9333ea)',
                  filter: 'blur(60px)',
                  opacity: 0.3,
                  animation: `${pulse} 4s infinite`,
                  zIndex: 0,
                }}
              />
              <Avatar
                src="/assets/1725451659776.jpg"
                alt="Profile Picture"
                sx={{
                  position: 'relative',
                  width: { xs: 280, lg: 400 },
                  height: { xs: 280, lg: 400 },
                  border: '4px solid rgba(59, 130, 246, 0.3)',
                  zIndex: 1,
                  background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          animation: `${bounce} 2s infinite`,
          zIndex: 10,
        }}
      >
        <Button 
          color="primary" 
          size="large" 
          onClick={() => {
            const element = document.getElementById('projects');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          sx={{ 
            cursor: 'pointer',
            minWidth: 'auto',
            p: 1,
            '&:hover': {
              backgroundColor: 'rgba(59, 130, 246, 0.1)'
            }
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 40, color: 'primary.main' }}  />
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
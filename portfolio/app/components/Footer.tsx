'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/luiszanoni'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/luiszanoni/'
    }
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Carreira', href: '#career' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      id="footer"
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper', 
        py: 6, 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)' 
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Esse é meu portfolio.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
             Gostou do meu trabalho? Entre em contato comigo no linkedin! Sempre aberto a novos projetos e colaborações.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  aria-label={social.name}
                  sx={{ 
                    '&:hover': { 
                      color: 'primary.main',
                      bgcolor: 'rgba(59, 130, 246, 0.1)' 
                    } 
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4}}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Links Rápidos
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                  <Link
                    component="button"
                    onClick={() => scrollToSection(link.href.substring(1))}
                    color="text.secondary"
                    underline="hover"
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 4}}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contato
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  luiszanoni01@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Espirito Santo, Brasil
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
            mt: 6, 
            pt: 4, 
            textAlign: 'center' 
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Porfolio em desenvolvimento de um desenvolvedor em evolução.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
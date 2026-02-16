import Box from '@mui/material/Box';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Career from './components/Career';
import Footer from './components/Footer';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Box component="main">
        <Hero />
        <Projects />
        <Career />
      </Box>
      <Footer />
    </Box>
  );
}

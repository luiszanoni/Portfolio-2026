'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import { keyframes } from '@emotion/react';

interface CareerItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education' | 'certification';
}

const Career = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education' | 'certification'>('all');

  const careerItems: CareerItem[] = [
    {
      id: 1,
      title: 'Formação em Tecnologia de Análise e Desenvolvimento de Sistemas',
      company: 'FAESA',
      period: '2021 - 2024',
      description: 'Formação acadêmica pela FAESA como Tecnólogo em Análise e Desenvolvimento de Sistemas.',
      technologies: [],
      type: 'education'
    },
    {
      id: 2,
      title: 'Estagiário de Desenvolvedor Full Stack',
      company: 'BANESTES - Banco Estadual do Espírito Santo',
      period: '2023 - 2025',
      description: 'Estruturação e manutenção de bancos de dados Oracle; desenvolvimento de APIs REST com Spring Boot (Java); criação de aplicações batch com Spring Batch; desenvolvimento de aplicações web com Angular (versões 7 a 18) e PrimeNG; desenvolvimento de testes unitários com JUnit e Mockito.',
      technologies: ['Java', 'Spring Boot', 'Spring Batch', 'Angular', 'PrimeNG', 'JUnit', 'Mockito', 'Oracle DB', 'SQL'
         ,'TypeScript',
      ],
      type: 'work'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Evologica Tecnologia e Pesquisa',
      period: 'Maio 2025 - Presente',
      description: 'Desenvolvimento de aplicações web completas, integração com APIs e otimização de performance.' +  
      ' Como desenvolvedor na Evologica, atuei ativamente no sistema de seguros desenvolvido para o BANESTES. ' + 
      ' Participei como líder de desenvolvimento do projeto Cognera, uma plataforma de triagem e tratamento psicológico para '+
      ' empresas e seus colaboradores, com gráficos, relatórios e questionários. ' +
      ' Desenvolvi um aplicativo de mensageria plug-and-play para a empresa integrar aos seus sistemas, utilizando Delphi e o framework autoral da Evologica, Curio,'
      + ' com integração à API do WhatsApp e serviços SMTP para envio de e-mails.',
      technologies: ['Delphi','Java','React.js','TypeScript','SpringBoot','SQLServer',
        'Curio Framework', 'JavaScript', 'UML', 'Model Driven Development', 'WhatsApp API', 'SMTP Services'],
      type: 'work'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? careerItems 
    : careerItems.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <WorkIcon />;
      case 'education':
        return <SchoolIcon />;
      case 'certification':
        return <EmojiEventsIcon />;
      default:
        return <PlaceIcon />;
    }
  };

  const getTypeColor = (type: string): "primary" | "secondary" | "success" | "warning" | "error" | "info" => {
    switch (type) {
      case 'work':
        return 'primary';
      case 'education':
        return 'success';
      case 'certification':
        return 'warning';
      default:
        return 'info';
    }
  };

  const handleFilterChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: 'all' | 'work' | 'education' | 'certification' | null,
  ) => {
    if (newFilter !== null) {
      setActiveFilter(newFilter);
    }
  };

  const bounce = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  `;
  return (
    <Box 
      id="career" 
      sx={{ 
        py: 10, 
        background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b)',
        color: 'white'
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 2, sm: 3 }, mb: { xs: 4, sm: 6 } }}>
          <Button
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            sx={{ 
              color: 'text.secondary', 
              '&:hover': { color: 'primary.main' },
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              animation: `${bounce} 2s infinite`,
            }}
          >
            <KeyboardArrowUpIcon sx={{ fontSize: { xs: 24, sm: 30 } }} />
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 8 } }}>
          <Typography 
             variant="h3" 
             component="h2" 
             fontWeight="bold" 
             gutterBottom
             sx={{ fontSize: { xs: '1.8rem', sm: '2.125rem' } }}
           >
            Minha <Typography component="span" variant="inherit" color="primary">Trajetória</Typography>
          </Typography>
          <Typography 
             variant="body1" 
             color="text.secondary" 
             sx={{ 
               maxWidth: '800px', 
               mx: 'auto',
               fontSize: { xs: '0.9rem', sm: '1rem' },
               px: { xs: 2, sm: 0 }
             }}
           >
            Uma jornada de crescimento profissional, aprendizado contínuo e conquistas ao longo dos anos.
          </Typography>
        </Box>

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, sm: 8 }, px: { xs: 2, sm: 0 } }}>
          <ToggleButtonGroup
            value={activeFilter}
            exclusive
            onChange={handleFilterChange}
            aria-label="career filter"
            sx={{ 
              bgcolor: 'rgba(255, 255, 255, 0.05)', 
              flexWrap: 'wrap',
              '& .MuiToggleButton-root': { 
                color: 'text.secondary',
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                border: '1px solid rgba(255, 255, 255, 0.1)',
                minWidth: { xs: '80px', sm: 'auto' },
                '&.Mui-selected': {
                  color: 'white',
                  bgcolor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  }
                },
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                }
              }
            }}
          >
            <ToggleButton value="all">Todos</ToggleButton>
            <ToggleButton value="work">Trabalho</ToggleButton>
            <ToggleButton value="education">Educação</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Timeline */}
        <Timeline 
          position="alternate"
          sx={{
            '& .MuiTimelineItem-root': {
              '&:before': {
                flex: { xs: 0, sm: 0.5 },
              },
            },
            '@media (max-width: 600px)': {
              '& .MuiTimelineItem-root': {
                flexDirection: 'row',
                '&:before': {
                  flex: 0,
                },
              },
              '& .MuiTimelineOppositeContent-root': {
                display: 'none',
              },
            },
          }}
        >
          {filteredItems.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent
                sx={{ 
                  m: 'auto 0',
                  fontSize: { xs: '0.8rem', sm: '0.875rem' }
                }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {item.period}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={getTypeColor(item.type)} sx={{ p: { xs: 0.5, sm: 1 } }}>
                  <Box sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    {getTypeIcon(item.type)}
                  </Box>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: { xs: '8px', sm: '12px' }, px: { xs: 1, sm: 2 } }}>
                <Card 
                  sx={{ 
                    bgcolor: 'background.paper',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: { xs: 'scale(1.01)', sm: 'scale(1.02)' },
                      boxShadow: 3
                    }
                  }}
                >
                 <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                     <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                       <Typography variant="subtitle1" component="span" fontWeight="bold" sx={{ lineHeight: { xs: 1.3, sm: 1.5 }, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
                         {item.title}
                       </Typography>
                       <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem', mt: 0.5 }}>
                         {item.period}
                       </Typography>
                     </Box>
                    <Typography color="primary" variant="subtitle2" sx={{ mb: { xs: 1, sm: 2 }, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                      {item.company}
                    </Typography>
                    <Typography 
                       variant="body2" 
                       color="text.secondary" 
                       sx={{ 
                         mb: { xs: 1, sm: 2 },
                         fontSize: { xs: '0.8rem', sm: '0.875rem' },
                         lineHeight: { xs: 1.4, sm: 1.5 }
                       }}
                     >
                      {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 0.5 } }}>
                      {item.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ 
                            fontSize: { xs: '0.65rem', sm: '0.7rem' },
                            height: { xs: '20px', sm: '24px' },
                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Stats Section */}
        {/* <Grid container spacing={4} sx={{ mt: 8, justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" fontWeight="bold" color="primary">
                3
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Anos de Experiência
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" fontWeight="bold" color="success.main">
                {careerItems.filter(item => item.type === 'certification').length}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Certificações
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
        

      </Container>
    </Box>
  );
};

export default Career;

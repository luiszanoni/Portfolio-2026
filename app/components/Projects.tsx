'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TechIcon from './TechIconSimple';
import { keyframes } from '@emotion/react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    live?: string;
    landingpage?: string;
  };
  screenshots: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Seguros BANESTES',
      description: 'Plataforma de seguros desenvolvida para o BANESTES pela Evologica. Atuo neste projeto realizando manutenções e implementando novas funcionalidades.',
      image: 'assets/evologica-logo.jpg',
      technologies: ['Delphi', 'JavaScript','React',  'SQLServer' ],
      tags: ['Full Stack', 'Seguradora', 'Finanças', 'Empresarial', 'Alta escala'],
      links: {
      },
      screenshots: []
    },
    {
      id: 2,
      title: 'Cognera',
      description: 'A Cognera é uma plataforma de saúde mental que oferece às empresas o mapeamento e o diagnóstico do estado de saúde mental de seus colaboradores, além do encaminhamento para profissionais e do acompanhamento ativo. Desenvolvida pela Evologica Tecnologia e Pesquisa, sou um dos desenvolvedores principais do projeto, atuando em todas as suas fases.',
      image: 'assets/cognera01.png',
      technologies: ['React', 'TypeScript', 'Java', 'SpringBoot', 'CurioFramework', 'SQLServer'	],
      tags: ['Saúde mental', 'Relatórios', 'Gráficos', 'Full Stack'],
      links: {
        landingpage: 'https://www.cognera.com.br/'
      },
      screenshots: []
    },
    {
      id: 3,
      title: 'EvoNotifica',
      description: 'Sistema de mensageria plug-and-play com suporte a múltiplos protocolos de comunicação desenvolvido na Evologica Tecnologia e Pesquisa.',
      image: 'assets/evologica-logo.jpg',
      technologies: ['Delphi', 'SQLServer', 'JavaScript', 'CurioFramework',],
      tags: ['Mensageria', 'Plug-and-play', 'Multi-protocolo', 'WhatsApp API', 'SMS', 'SMTP'],
      links: {
      },
      screenshots: []
    },
    {
      id: 4,
      title: 'KeepKoin',
      description: 'KeepKoin é uma aplicação web moderna de gestão financeira pessoal desenvolvida com React, TypeScript e Material UI, oferecendo uma experiência completa e responsiva para controle de finanças pessoais.'
      +' A ideia do KeepKoin é facilitar o uso de aplicações de finanças pessoais e oferecer total customização ao usuário, a um valor acessível.'
      + ' Por ser um projeto em andamento, ainda não está disponível para uso público.',
      image: 'assets/keepkoin01.png',
      technologies: ['TypeScript', 'React', 'Supabase', 'PostgreSQL'],
      tags: ['Autoral', 'Software as a Service', 'Finanças'],
      links: {
        live: 'https://www.keepkoin.com.br/'
      },
      screenshots: ['/api/placeholder/600/400', '/api/placeholder/600/400']
    }
  ];

  const getTechnologyIcon = (tech: string) => {
    return <TechIcon name={tech} size={16} />;
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentScreenshot(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentScreenshot(0);
  };

  const nextScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot((prev) => 
        (prev + 1) % selectedProject.screenshots.length
      );
    }
  };

  const prevScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 900,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 3,
    outline: 'none',
    overflowY: 'auto',
    p: 0,
  };

    const bounce = keyframes`
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    `;

  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, mb: 6, animation: `${bounce} 2s infinite` }}>
          <Button
            onClick={() => {
              const element = document.getElementById('home');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            sx={{ 
              color: 'text.secondary', 
              '&:hover': { color: 'primary.main' },
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center' 
            }}
          >
            <KeyboardArrowUpIcon sx={{ fontSize: 30 }} />
          </Button>
          
        </Box>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            Meus <Typography component="span" variant="inherit" color="primary">Projetos</Typography>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e domínios.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                    '& .project-overlay': {
                      opacity: 1,
                    }
                  }
                }}
                onClick={() => openModal(project)}
              >
                <Box sx={{ position: 'relative', pt: '56.25%' /* 16:9 aspect ratio */ }}>
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    <Typography variant="button" sx={{ color: 'white', border: '1px solid white', px: 2, py: 1, borderRadius: 1 }}>
                      Ver Detalhes
                    </Typography>
                  </Box>
                </Box>
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" sx={{ '&:hover': { color: 'primary.main' } }}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        icon={getTechnologyIcon(tech)}
                        sx={{ bgcolor: 'rgba(59, 130, 246, 0.1)', color: 'primary.light', borderColor: 'rgba(59, 130, 246, 0.2)', padding: 0.8 }}
                        variant="outlined"
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip label={`+${project.technologies.length - 3}`} size="small" variant="outlined" />
                    )}
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ fontSize: '0.7rem', height: 20 , padding: 0.3}}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* Botões de Navegação */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, mt: 6, animation: `${bounce} 2s infinite` }}>

        
          <Button
            onClick={() => {
              const element = document.getElementById('career');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            sx={{ 
              color: 'text.secondary', 
              '&:hover': { color: 'primary.main' },
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center' 
            }}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
          </Button>
        </Box>
      </Container>

      {/* Modal */}
      <Modal
        open={!!selectedProject}
        onClose={closeModal}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <Box sx={modalStyle}>
          {selectedProject && (
            <>
              <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography id="project-modal-title" variant="h5" component="h2" fontWeight="bold">
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={closeModal} color="inherit">
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box sx={{ p: 3 }}>
                {selectedProject.screenshots.length > 0 ? (
                  <Box sx={{ position: 'relative', mb: 3, borderRadius: 2, overflow: 'hidden', bgcolor: 'black', height: { xs: 200, md: 400 } }}>
                    <Box
                      component="img"
                      src={selectedProject.screenshots[currentScreenshot]}
                      alt={`Screenshot ${currentScreenshot + 1}`}
                      sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                    
                    {selectedProject.screenshots.length > 1 && (
                      <>
                        <IconButton
                          onClick={prevScreenshot}
                          sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}
                        >
                          <ArrowBackIosNewIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton
                          onClick={nextScreenshot}
                          sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}
                        >
                          <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </IconButton>
                      </>
                    )}
                    
                    <Box sx={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 1 }}>
                      {selectedProject.screenshots.map((_, index) => (
                        <Box
                          key={index}
                          onClick={() => setCurrentScreenshot(index)}
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: index === currentScreenshot ? 'primary.main' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                ) : (
                  <Box sx={{ 
                    mb: 3, 
                    borderRadius: 2, 
                    bgcolor: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    height: { xs: 200, md: 400 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    p: 3
                  }}>
                    <Box sx={{ fontSize: 60, mb: 2, opacity: 0.5 }}>🔒</Box>
                    <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
                      Screenshots Indisponíveis
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.8 }}>
                      As imagens deste projeto não podem ser exibidas por questões contratuais e de confidencialidade.
                    </Typography>
                  </Box>
                )}

                <Typography id="project-modal-description" sx={{ mb: 4, color: 'text.secondary' }}>
                  {selectedProject.description}
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom fontWeight="bold">Tecnologias Utilizadas</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        icon={getTechnologyIcon(tech)}
                        sx={{ bgcolor: 'rgba(59, 130, 246, 0.1)', color: 'primary.light', borderColor: 'rgba(59, 130, 246, 0.2)', padding: 0.8 }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom fontWeight="bold">Tags</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        variant="filled"
                      />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {selectedProject.links.github && (
                    <Button
                      variant="outlined"
                      color="inherit"
                      startIcon={<GitHubIcon />}
                      href={selectedProject.links.github}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  )}
                  {selectedProject.links.demo && (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<LaunchIcon />}
                      href={selectedProject.links.demo}
                      target="_blank"
                    >
                      Demo
                    </Button>
                  )}
                  {selectedProject.links.live && (
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<LaunchIcon />}
                      href={selectedProject.links.live}
                      target="_blank"
                    >
                      Live Site
                    </Button>
                  )}
                  {selectedProject.links.landingpage && (
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<LaunchIcon />}
                      href={selectedProject.links.landingpage}
                      target="_blank"
                    >
                      Landing Page
                    </Button>
                  )}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;

import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = 16 }) => {
  // Converte o nome da tecnologia para o nome do arquivo
  const fileName = name.toLowerCase()
    .replace(/\./g, '')
    .replace(/\s+/g, '-')
    .replace('react-native', 'reactnative')
    .replace('socket.io', 'socketio')
    .replace('fastapi', 'fastapi')
    .replace('chart.js', 'chartjs')
    .replace('d3.js', 'd3js');
  
  const svgPath = `/svg-icons/${fileName}.svg`;
  
  return (
    <img 
      src={svgPath} 
      alt={`${name} icon`} 
      style={{ width: size, height: size }} 
      onError={(e) => {
        // Se o arquivo não existir, usa um ícone padrão
        e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
          <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#666">
            <rect x="4" y="4" width="16" height="16" rx="2" fill="#666"/>
            <text x="12" y="14" text-anchor="middle" fill="white" font-size="8" font-weight="bold">?</text>
          </svg>
        `)}`;
      }}
    />
  );
};

export default TechIcon;
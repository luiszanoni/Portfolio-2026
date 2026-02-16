# Ícones SVG para Tecnologias

Aqui estão alguns ícones SVG populares que você pode adicionar à pasta `public/svg-icons/`:

## React
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#61DAFB">
  <circle cx="12" cy="12" r="2.5"/>
  <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" stroke-width="1"/>
  <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(60 12 12)"/>
  <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(120 12 12)"/>
</svg>
```

## Next.js
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4V18.82l-8 4-8-4V7.18l8-4zM7.5 16.5l-1.41-1.41L12 10.18l5.91 4.91-1.41 1.41L12 12.82l-4.5 3.68z"/>
</svg>
```

## TypeScript
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3178C6">
  <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6"/>
  <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="bold">TS</text>
</svg>
```

## Node.js
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#339933">
  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4V18.82l-8 4-8-4V7.18l8-4zM7.5 16.5l-1.41-1.41L12 10.18l5.91 4.91-1.41 1.41L12 12.82l-4.5 3.68z"/>
</svg>
```

## MongoDB
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#47A248">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.23-2.13 3.37 1.95-1.23 2.13zm7.66 0l-3.37-1.95 1.23-2.13 3.37 1.95-1.23 2.13zM7.63 9.8L12 7.5l4.37 2.3-1.23 2.13L12 11.76l-3.37-1.95L7.63 9.8z"/>
</svg>
```

## PostgreSQL
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4169E1">
  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4V18.82l-8 4-8-4V7.18l8-4zM7.5 16.5l-1.41-1.41L12 10.18l5.91 4.91-1.41 1.41L12 12.82l-4.5 3.68z"/>
</svg>
```

## Como usar

1. Salve cada SVG como um arquivo separado na pasta `public/svg-icons/`
2. Nomeie os arquivos como: `react.svg`, `nextjs.svg`, `typescript.svg`, etc.
3. Atualize o componente `TechIcons.tsx` para usar os arquivos SVG externos

## Exemplo de uso com arquivos externos

Você pode modificar o componente `TechIcons.tsx` para carregar SVGs externos:

```tsx
const TechIcon: React.FC<TechIconProps> = ({ name, size = 24, color = 'currentColor' }) => {
  const svgPath = `/svg-icons/${name.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')}.svg`;
  
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: center }}>
      <img 
        src={svgPath} 
        alt={`${name} icon`} 
        style={{ width: size, height: size }} 
        onError={(e) => {
          // Fallback para ícone padrão se o SVG não existir
          e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
            <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
              <rect x="4" y="4" width="16" height="16" rx="2" fill="#666"/>
              <text x="12" y="14" text-anchor="middle" fill="white" font-size="8" font-weight="bold">?</text>
            </svg>
          `)}`;
        }}
      />
    </Box>
  );
};
```

Isso permitirá que você adicione facilmente novos ícones SVG à pasta `public/svg-icons/` e eles serão carregados automaticamente.
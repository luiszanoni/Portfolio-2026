import type { Metadata } from "next";
import ThemeRegistry from "./theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Portfolio - Luis Zanoni",
  description: "Portfólio profissional de desenvolvedor Full Stack com projetos, experiência e trajetória.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

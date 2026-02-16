import type { Metadata } from "next";
import ThemeRegistry from "./theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Portfolio - Luis Zanoni",
  description: "Portfolio profissional de desenvolvedor full stack com projetos, experiência e trajetória profissional.",
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

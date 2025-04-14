



import type { Metadata } from "next";

import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "AgendaPro - Gestiona tu agenda de forma inteligente",
  description: "Optimiza tu tiempo y aumenta tu productividad con nuestra plataforma de agenda digital en línea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster richColors />
        </body>
      </html>
    </>
  );
}

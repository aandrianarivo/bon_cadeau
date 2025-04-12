import { ProgressProvider } from "@/src/context/ProgressContext";
import "./globals.css";
// import { ProgressProvider } from "../context/ProgressContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
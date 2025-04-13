import { ProgressProvider } from "@/src/context/ProgressContext";
import "./globals.css";
import Header from "@/src/components/headers";
// import { ProgressProvider } from "../context/ProgressContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header/>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
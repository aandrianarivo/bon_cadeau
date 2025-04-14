import { ProgressProvider } from "@/src/context/ProgressContext";
import "./globals.css";
import Header from "@/src/components/headers";
import ProProgressBar from "@/src/components/progressBar";
import Footer from "@/src/components/footer";
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
        <ProgressProvider>
          <ProProgressBar/>
          {children}
        </ProgressProvider>
        <Footer/>
      </body>
    </html>
  );
}
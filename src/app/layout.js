import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "./providers/ThemeProvider";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quantum Blog",
  description: "Speak your mind!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-white text-black dark:text-[#ddd] dark:bg-[#111b2b]">
              <div className="max-w-[640px] sm:max-w-[768px] md:max-w-[1024px] lg:max-w-[1366px] xl:max-w-[1536px] mx-auto p-2 sm:p-4 md:p-6 lg:p-8 xl:px-10">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

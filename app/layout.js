import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "VSCRUM",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme:shadesOfPurple,
        variables:{
          colorPrimary:"#3b82f6",
          colorBackground:"#1a202c",
          colorInputBackground:"#2D3748",
          colorInputText:"#F3F4F6"
        },
        elements:{
          formButtonPrimary:"text-white",
          card: "bg-gray-800"
        }
      }}
     
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} dotted-background`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors/>
            <footer className="bg-gray-900 py-12 mt-5">
              <div className="container mx-auto  px-4 text-center text-grey-300">
                <p>Made with ♥ by Sharif</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

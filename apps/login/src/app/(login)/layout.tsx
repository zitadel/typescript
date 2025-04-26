import "@/styles/globals.scss";

import { LanguageProvider } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Skeleton } from "@/components/skeleton";
import { Theme } from "@/components/theme";
import { ThemeProvider } from "@/components/theme-provider";
import OmniWOTLogo from "@/components/omniwot-logo";
import { Analytics } from "@vercel/analytics/react";
import { Lato } from "next/font/google";
import { ReactNode, Suspense } from "react";
import { Metadata } from 'next';

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Omniwot Auth',
  description: 'Authentication service for Omniwot',
  icons: {
    icon: '/favicon-omniwot.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className={`${lato.className}`} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>
          <Suspense
            fallback={
              <div className="relative min-h-screen bg-background-light-600 dark:bg-background-dark-600 flex">
                <div className="w-1/2 bg-[#0A192F] hidden lg:flex flex-col items-center justify-center p-8">
                  <Skeleton>
                    <div className="h-40"></div>
                  </Skeleton>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-8">
                  <div className="relative mx-auto max-w-[440px] w-full">
                    <Skeleton>
                      <div className="h-40"></div>
                    </Skeleton>
                    <div className="flex flex-row justify-end py-4 items-center space-x-4">
                      <Theme />
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <LanguageProvider>
              <div className="relative min-h-screen flex" style={{
                backgroundImage: 'url(/svg/background.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                {/* Left Section - Platform Diagram */}
                <div className="w-1/2 hidden lg:flex flex-col items-center justify-center p-8 relative">
                  <div className="max-w-2xl relative z-10">
                    <h1 className="text-4xl font-bold mb-8" style={{
                      background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Multi-Protocol IOT Platform</h1>
                    <div className="relative mb-8">
                      <div className="flex items-center justify-center">
                        {/* Center Logo */}
                        <div className="relative z-10">
                          <OmniWOTLogo />
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-white/90 mt-8 text-2xl">
                      Hardware Agnostic & AI driven across all Industries
                    </p>
                    <p className="text-center text-white/90 mt-2 text-2xl">
                      No-Code | Low-Code | Industrial IOT Platform
                    </p>
                  </div>
                </div>

                {/* Right Section - Login Form */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-8">
                  <div className="relative mx-auto max-w-[440px] w-full">
                    <div className="bg-[#112240] rounded-lg p-8 shadow-xl">
                      {children}
                      <div className="flex flex-row justify-end py-4 items-center space-x-4">
                        <LanguageSwitcher />
                        <Theme />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LanguageProvider>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

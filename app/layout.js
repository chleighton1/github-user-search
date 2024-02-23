import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "GitHub user search app",
  description: "Search for GitHub users via Github API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-bg-light dark:bg-bg-dark text-tx-light dark:text-tx-dark min-h-[100dvh] ${spaceMono.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

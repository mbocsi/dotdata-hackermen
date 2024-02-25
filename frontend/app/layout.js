import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Predict Premier Leauge Games",
  description: "Premier Leauge Game Predictor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute flex flex-row w-full justify-between p-10">
          <Link
            href="/"
            className="group rounded-lg border border-transparent px-5 py-3 transition-colors hover:border-gray-300 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`text-2xl font-semibold`}>Home</h2>
          </Link>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.premierleague.com/matchweek/12294/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/Premier-League-logo.png"
              alt="PL Logo"
              className="dark:invert"
              width={150}
              height={30}
              priority
            />
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}

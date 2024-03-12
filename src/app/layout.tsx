import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bookmark from "./components/Bookmark/Bookmark";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caltrix",
  description: "Site for matrix calculation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
		<article className="flex flex-col">
			<Header>
				<h1>Caltrix</h1>
			</Header>
			<Bookmark url="/settings"/>
		</article>
		{ children }
		<Footer>
			<h1>Result</h1>
		</Footer>
	  </body>
    </html>
  );
}

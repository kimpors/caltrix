import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bookmark from "./components/Bookmark/Bookmark";
import Provider from "./components/Provider";
import Result from "./components/Result/Result";
import "./style.css";
import UrlChangeListener from "./components/UrlChangeListener";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
	  	<Provider>
			<article className="flex flex-col">
				<Header>
					<h1>Caltrix</h1>
				</Header>
				<Bookmark next_url="/settings" previous_url="/" />
			</article>
			{ children }
			<Footer>
				<h1>Result</h1>
				<Result />
			</Footer>
		</Provider>
	  </body>
    </html>
  );
}

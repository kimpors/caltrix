import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './components/Header/Header'
import Bookmark from "./components/Bookmark/Bookmark";
import Provider from "./components/Provider";
import "./style.css";

import StateProvider from "./components/StateContext";

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
			<article style={{ height:"150px" }}>
				<Header>
					<h1>Caltrix</h1>
				</Header>
				<Bookmark />
			</article>
			<StateProvider>
				{ children }
			</StateProvider>
		</Provider>
	  </body>
    </html>
  );
}

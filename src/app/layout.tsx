import type { Metadata } 	from "next";
import Header 				from "@/app/components/Header/Header";
import Bookmark 			from "@/app/components/Bookmark/Bookmark";
import Provider 			from "@/app/components/Provider";
import StateProvider 		from "@/app/components/StateContext";
import "./style.css";

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
    <html className="bg-primary" lang="en" suppressHydrationWarning>
      <body>
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

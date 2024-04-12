import type { Metadata } from "next";
import '../styles/globals.css'
import './index.css'
import {Providers, ProvidersNext} from "@/app/providers";

export const metadata: Metadata = {
  title: "kimmo-deals",
  description: "kimmo-deals at your service",
};

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
return(
   <>
    <html lang="en" suppressHydrationWarning>
    <body>
      <Providers>
        <ProvidersNext>
       <div>{children}</div>
        </ProvidersNext>
       </Providers>
    </body>
     </html>
    </>
);
}

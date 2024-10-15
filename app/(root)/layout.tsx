import MobileNav from "@/components/ui/MobileNav";
import Navbar from "@/components/ui/Navbar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn = await getLoggedInUser
    return (
      <main className="font-montserrat overflow-x-clip">
        <Navbar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={74} height={74} alt="logo" />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
        </div>
      </main>
    );
  }
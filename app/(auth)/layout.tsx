import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen justify-between w-full font-roboto">
        {children}
        <div className="auth-asset">
          <div>
            <Image
              src='/icons/kimmoLogin2.svg'
              alt="auth-asset"
              width={500}
              height={500}
              className="w-[20rem]"
              />
          </div>
        </div>
      </main>
    );
  }
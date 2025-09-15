import NavLink from "@/components/NavLink";
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laurie Nicholas | Product Leader",
  description:
    "Proven product leader who gets businesses building things that drive metrics that matter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased md:px-10 sm:px-5 px-4">
        <header className="">
          <nav aria-label="Main navigation">
            <ul className="display-flex flex-row gap-4 justify-end align-content-end text-right pt-4 sm:pt-6 md:pt-7 pb-3">
              <NavLink href="/">Work</NavLink>
              <NavLink href="/profile">Profile</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </ul>
          </nav>

          <section className="grid grid-cols-12 gap-5 items-top my-25">
            <Image
              src="/LaurieNicholas.jpg"
              alt="Laurie Nicholas"
              className="rounded-full justify-self-end col-start-1 col-end-3 md:col-start-3 md:col-end-5"
              width={65}
              height={65}
            />
            <div className="col-span-10 md:col-span-8 grid grid-cols-subgrid">
              <h1 className="font-[GaramondPremierProDisplay] text-4xl md:text-6xl sm:text-7xl col-span-full text-brand">
                Laurie Nicholas
              </h1>
              <p className="sm:text-lg text-md col-span-full">
                Proven product leader who gets businesses{" "}
                <br className="hidden sm:block" />
                building things that drive metrics that matter
              </p>
            </div>
          </section>
        </header>
        <main className="grid grid-cols-12 gap-5 items-top">{children}</main>
        <footer>
          <p className="text-center text-sm text-neutral-500 py-10">
            hello@laurienicholas.net
          </p>
        </footer>
      </body>
    </html>
  );
}

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
      <body className="antialiased px-10">
        <header>
          <nav aria-label="Main navigation">
            <ul className="display-flex flex-row gap-4 justify-end align-content-end text-right pt-7">
              <NavLink href="/">Work</NavLink>
              <NavLink href="/profile">Profile</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </ul>
          </nav>

          <section className="grid grid-cols-12 gap-5 px-10 items-top my-25">
            <Image
              src="/LaurieNicholas.jpg"
              alt="Laurie Nicholas"
              className="col-start-3 col-end-5 rounded-full justify-self-end"
              width={65}
              height={65}
            />
            <div className="col-span-8 grid grid-cols-subgrid">
              <h1 className="font-[GaramondPremierProSubhead] italic text-7xl col-span-8 text-brand">
                Laurie Nicholas
              </h1>
              <p className="text-lg col-span-5">
                Proven product leader who gets businesses building things that
                drive metrics that matter
              </p>
            </div>
          </section>
        </header>
        <main className="grid grid-cols-12 gap-5 px-10 items-top">
          {children}
        </main>
        <footer>
          <p className="text-center text-sm text-neutral-500 py-10">
            hello@laurienicholas.me
          </p>
        </footer>
      </body>
    </html>
  );
}

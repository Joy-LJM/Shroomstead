import "./globals.css";
import Link from "next/link";
import {Fredoka, Figtree} from "next/font/google"

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
})
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
})
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${figtree.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
      <Link href="/">Home</Link>
      <Link href="/properties">Properties</Link>
      <Link href="/leases">Leases</Link>
      <Link href="/maintenance-requests">Maintenance Requests</Link>
    </nav>
        {children}</body>
    </html>
  );
}

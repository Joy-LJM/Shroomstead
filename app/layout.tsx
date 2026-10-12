import "./globals.css";
import Link from "next/link";
import {Fredoka, Figtree} from "next/font/google"

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600"],
})
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
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
      <Link href="/properties">Landlord Dashboard</Link>
      <Link href="/leases">Tenant Dashboard</Link>
    </nav>
        {children}</body>
    </html>
  );
}

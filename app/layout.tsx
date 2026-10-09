import Link from "next/link";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <nav>
      <Link href="/">Home</Link>
      <Link href="/properties">Properties</Link>
      <Link href="/leases">Leases</Link>
      <Link href="/maintenance-requests">Maintenance Requests</Link>
      {children}
    </nav>
        {children}</body>
    </html>
  );
}

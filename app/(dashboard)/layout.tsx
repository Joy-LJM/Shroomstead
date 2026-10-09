export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <aside>Dashboard menu goes here</aside>
      <section>{children}</section>
    </div>
  );
}
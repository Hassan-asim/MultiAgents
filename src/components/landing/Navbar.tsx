export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md w-full flex items-center justify-between px-6 py-3">
      <div className="font-bold text-xl tracking-tight">AISB Selection</div>
      <a href="/admin/dashboard" className="font-medium hover:text-accent transition">Dashboard</a>
    </nav>
  );
}

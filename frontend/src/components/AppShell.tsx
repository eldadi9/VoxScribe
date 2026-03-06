import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/upload", label: "Upload" },
  { href: "/transcript", label: "Transcript" },
  { href: "/summary", label: "Summary" },
  { href: "/history", label: "History" },
];

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
          >
            VoxScribe
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}

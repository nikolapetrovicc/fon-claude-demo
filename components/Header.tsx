import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Nimbus
        </Link>
        <nav className="hidden gap-8 md:flex">
          <Link href="#features" className="text-sm text-neutral-600 hover:text-neutral-900">Features</Link>
          <Link href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900">Pricing</Link>
          <Link href="#docs" className="text-sm text-neutral-600 hover:text-neutral-900">Docs</Link>
        </nav>
        <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
          Get started
        </button>
      </div>
    </header>
  );
}

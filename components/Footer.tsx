export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-neutral-600">© 2026 Nimbus. Built at FON Open IT.</p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">Twitter</a>
          <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">GitHub</a>
          <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

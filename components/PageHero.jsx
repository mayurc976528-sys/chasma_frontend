import Link from "next/link";

// Dark navy banner shown at the top of the inner pages (Collection / About / Contact)
// with a breadcrumb trail underneath the title.
export default function PageHero({ title, crumb }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
      <div className="container-x relative py-14 text-center md:py-20">
        <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
        <nav className="mt-3 flex items-center justify-center gap-2 text-sm text-white/60">
          <Link href="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span>›</span>
          <span className="text-brand">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { issues, getIssueBySlug } from "@/data/issues";

export async function generateStaticParams() {
  return issues.map((i) => ({ slug: i.slug }));
}

export default async function IssuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero */}
      <section
        className="relative px-6 py-28 text-center"
        style={{
          backgroundImage: "url('/kashmir.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(6,95,70,0.62)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white/70 font-bold text-sm uppercase tracking-widest mb-3">
            World Issue
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            {issue.title}
          </h1>
          <p
            className="text-lg font-black max-w-xl mx-auto"
            style={{ color: "#FCD34D" }}
          >
            {issue.stat}
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
        {/* Back */}
        <Link href="/issues" className="text-primary font-bold text-sm hover:underline mb-8 block">
          ← Back to World Issues
        </Link>

        {/* Reality */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
            The Reality
          </h2>
          <p className="text-gray-700 font-semibold text-base leading-relaxed">{issue.reality}</p>
        </section>

        <hr className="border-gray-100 mb-12" />

        {/* Sufi Response */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
            The Sufi Response
          </h2>
          <div className="rounded-2xl p-6 mb-6" style={{ backgroundColor: issue.color + "10" }}>
            <p
              className="text-base font-semibold leading-relaxed text-gray-700 mb-4"
            >
              {issue.sufiResponse}
            </p>
            <Link
              href={`/sufis/${issue.sufiSlug}`}
              className="inline-block text-xs font-black uppercase tracking-widest hover:underline"
              style={{ color: issue.color }}
            >
              Learn more about {issue.sufiName} →
            </Link>
          </div>
        </section>

        <hr className="border-gray-100 mb-12" />

        {/* Actions */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            What We Can Do
          </h2>
          <ul className="flex flex-col gap-4">
            {issue.actions.map((action, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="mt-0.5 font-black text-lg leading-none"
                  style={{ color: issue.color }}
                >
                  →
                </span>
                <span className="text-gray-700 font-semibold text-base leading-relaxed">
                  {action}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <Link href="/issues" className="text-primary font-bold text-sm hover:underline">
            ← All Issues
          </Link>
          <Link
            href="/blog"
            className="text-white font-black text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: issue.color }}
          >
            Read Our Reflections →
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center">
        <p className="font-black text-white mb-1">OurSufiWorld</p>
        <p className="italic text-emerald-300 mb-1">&ldquo;Where the Divine Meets the People&rdquo;</p>
        <p>oursufiworld.com</p>
      </footer>
    </div>
  );
}

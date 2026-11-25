import Link from "next/link";

const LegalPage = (props: { title: string; children: React.ReactNode }) => (
  <main className="min-h-screen bg-blueN px-6 pt-4 pb-12">
    <Link
      href="/"
      className="font-bold text-3xl text-slate-100 uppercase hover:text-redN"
    >
      Noel Huibers
    </Link>
    <article className="mx-auto mt-12 max-w-3xl space-y-4 rounded-lg bg-slate-50 p-8 text-blueN text-lg [&_a:hover]:text-redN [&_a]:text-lightBlueN [&_a]:underline [&_h2]:pt-4 [&_h2]:font-bold [&_h2]:text-2xl [&_ul]:list-disc [&_ul]:pl-6">
      <h1 className="text-3xl text-redN lg:text-4xl">{props.title}</h1>
      {props.children}
    </article>
  </main>
);

export default LegalPage;

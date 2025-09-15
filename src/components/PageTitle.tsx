export default function PageTitle({ title }: { title: string }) {
  return (
    <h2 className="col-span-full text-brand text-4xl font-[GaramondPremierProDisplay] border-b-1 border-neutral-50/50">
      {title}
    </h2>
  );
}

export default function Content({ children }: { children?: React.ReactNode }) {
  return (
    <section className="flex justify-center items-center w-full">
      {children}
    </section>
  );
}

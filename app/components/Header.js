
export default function Header() {
  return (
    <main>
      <TypographyH2 />
    </main>
  );
}

export function TypographyH2() {
    return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        RSS Feed
      </h2>
    )
  }

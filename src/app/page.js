import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Testing API routes for Server Side</h1>
      <Link href="/products">Click here to see api Routes fetching</Link>
    </div>
  );
}

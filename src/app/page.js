import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>SSG Testing</h1>
      <Link href="/users">Click here to see SSG Testing</Link>
    </div>
  );
}

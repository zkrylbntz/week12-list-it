"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <h2>Something went wrong globally!</h2>
      <p>{error.message}</p>

      <Link href="/">Go home</Link>
    </div>
  );
}

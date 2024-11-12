"use client";
import Link from "next/link";
import Image from "next/image";

export default function GlobalError({ error }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-xl">
        <figure>
          <Image
            src="/ohDear.jpg"
            alt="frustrated man, looking sad at his laptop"
            height={400}
            width={640}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Oh No! Something went wrong!</h2>
          <p>{error.message}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href="/">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

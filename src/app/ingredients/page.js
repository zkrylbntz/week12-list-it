import Link from "next/link";
import Image from "next/image";

export default function IngredientsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-xl">
        <figure>
          <Image
            src="/cooking.jpg"
            alt="dough being kneaded"
            height={400}
            width={640}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Missing ingredients!</h2>
          <p>
            This page needs a few more ingredients before it&apos;s ready to
            serve. Check back later!
          </p>
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

import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-xl">
        <figure>
          <Image
            src="/emptyPlate.jpg"
            alt="empty plate, no food here"
            height={400}
            width={640}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">No recipes found here</h2>
          <p>This page does not exist</p>
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

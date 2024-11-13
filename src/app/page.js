import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="main-content">
        <div className="concept concept-one">
          <div className="hover hover-1"></div>
          <div className="hover hover-2"></div>
          <div className="hover hover-3"></div>
          <div className="hover hover-4"></div>
          <div className="hover hover-5"></div>
          <div className="hover hover-6"></div>
          <div className="hover hover-7"></div>
          <div className="hover hover-8"></div>
          <div className="hover hover-9"></div>
          <h1 className="title">
            <Image
              className="image"
              src="/output-onlinepngtools (2) (1).png"
              alt="empty plate, no food here"
              height={500}
              width={600}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

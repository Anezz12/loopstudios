/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Header() {
  return (
    <section id="hero">
      <div className=" container max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          {/* <Image width={200} height={200} src="logo.svg" alt="pict" /> */}
          <img src="logo.svg" alt="pict" />
          {/* Menu */}

          <div className="hidden h-10 font-sans md:flex md:space-x-8">
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

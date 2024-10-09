import Link from "next/link";

export default function Home() {
  return (
    <div className= "text-center ">
      <nav>
        <a >
          Mohsin 
        </a>
        <div>
          <Link href="/  Home"> Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact/contact-us">Contact-us </Link>
        </div>
      </nav>
    </div>
  );
}

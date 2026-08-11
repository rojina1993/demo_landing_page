import Image from "next/image";

export default function Header() {
  return <header className="py-5 text-center sm:py-7"><a href="/" aria-label="Rojina Ghale Digital home" className="logo"><Image src="/22-removebg-preview.png" alt="Rojina Ghale Digital" width={180} height={142} priority /></a></header>;
}

import Image from "next/image";
import TopBackground from "./components/Hero/TopBackground";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <Sections />
      <Navbar />
      <ThemeToggle />
      <TopBackground />
      <Image
        src="/bottom_gradient_mobile.svg"
        alt="Bottom BG"
        height={700}
        width={1024}
        className="absolute bottom-0 min-w-[1024px] min-h-[700px] -z-50 md:hidden "
      />
      <Image
        src="/bottom_gradient.svg"
        alt="Bottom BG"
        height={936}
        width={1557}
        className="absolute -bottom-[175px] left-1/2 -translate-x-1/2 min-w-[1557px] min-h-[936px] -z-50 hidden md:block "
      />
    </div>
  );
}

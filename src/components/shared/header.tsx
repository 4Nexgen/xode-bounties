import Image from "next/image";

export function Header() {
  return (
    <div className="bg-[#000a3ad4] backdrop-blur-md text-white fixed w-full z-20 border-b border-theme-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <Image src="/logo.webp" alt="Xode Logo" width={40}  height={40} className="h-12" />
          <div>
            <a
              href="#"
              className="bg-theme-default text-white py-3 px-4 rounded-lg text-xs font-bold"
            >
              List your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

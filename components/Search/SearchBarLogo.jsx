// @ts-ignore
import SearchBarLogo from "../../public/search-bar-logo.png";
import Image from "next/image";

export default function SearchBarLogoComponent() {
  return (
    <div className="text-center">
      <Image
        src={SearchBarLogo}
        alt="search bar logo"
        className="brand-logo"
        width={SearchBarLogo.width / 2}
        height={SearchBarLogo.height / 2}
      />
    </div>
  );
}

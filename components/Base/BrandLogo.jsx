// @ts-ignore
import BrandLogo from "../../public/toedu.png";
import Image from "next/image";

export default function BrandLogoComponent() {
  return (
    <Image src={BrandLogo} alt="toedu brand" className="scale-50 brand-logo" />
  );
}

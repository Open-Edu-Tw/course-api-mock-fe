import BrandLogoComponent from "../Base/BrandLogo";

export default function Navbar() {
  return (
    <section className="flex justify-between w-full navbar">
      <div>
        <BrandLogoComponent />
      </div>
    </section>
  );
}

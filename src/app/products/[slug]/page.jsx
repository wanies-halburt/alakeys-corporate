import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import ServiceDetail1 from "@/components/section/ServiceDetail1";

export const metadata = {
  title:
    "Freeio - Freelance Marketplace React/Next Js Template | Service Single",
};

export default function page() {
  return (
    <>
      <div className=" pt-60">
        <Breadcumb3 path={["Home", "Products", "Design & Creative"]} />
        <ServiceDetail1 />
      </div>
    </>
  );
}

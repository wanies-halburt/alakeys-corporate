import Breadcumb7 from "@/components/breadcumb/Breadcumb7";

import ContactInfo1 from "@/components/section/ContactInfo1";
import GoogleMap1 from "@/components/section/GoogleMap1";

export const metadata = {
  title: "Contact us at Alakeys",
};

export default function page() {
  return (
    <>
      <Breadcumb7
        title={"Contact us"}
        subtitle={`We'd love to talk about how we can help you.`}
        isBtnActive={false}
      />
      <ContactInfo1 />
      <GoogleMap1 />
    </>
  );
}

import Breadcumb7 from "@/components/breadcumb/Breadcumb7";
import ServiceInquiryForm from "./Form";

const ServiceInquiry = () => {
  return (
    <div>
      <Breadcumb7
        title={"Service Inquiry"}
        subtitle={`We'd love to talk about how we can help you.`}
        isBtnActive={false}
      />
      <ServiceInquiryForm />
    </div>
  );
};

export default ServiceInquiry;

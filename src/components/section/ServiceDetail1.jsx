"use client";

// import ServiceDetailSlider1 from "../element/ServiceDetailSlider1";
import { StickyContainer } from "react-sticky";
import useScreen from "@/hook/useScreen";
import Image from "next/image";

export default function ServiceDetail1({ img, title, description }) {
  const isMatchedScreen = useScreen(1216);

  return (
    <>
      <StickyContainer>
        <section className="pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wrap">
              <div className="col-lg-8">
                <div className="column">
                  <h2>{title}</h2>
                  {/* <ServiceDetailSlider1 /> */}
                  <Image
                    width={1000}
                    height={600}
                    src={img}
                    alt={title}
                    className=" w-full shadow rounded"
                  />
                  <div className="service-about">
                    <div
                      className="pt-5 pb-5 list_bullet"
                      style={{
                        width: "100%",
                        alignItems: "center",
                        justifyItems: "center",
                        justifyContent: "center",
                        margin: "0px auto",
                      }}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}

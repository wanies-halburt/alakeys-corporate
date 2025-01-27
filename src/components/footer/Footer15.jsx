import { about, category, support } from "@/data/footer";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import FooterSocial5 from "./FooterSocial5";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toaster from "react-hot-toast";

const registerSchema = yup.object({
  email: yup.string().email().required(" Email is required"),
});

export default function Footer15() {
  const [isRouting, setIsRouting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = async (formValues) => {
    setIsRouting(true);
    try {
      const response = await axios.post(`/api/newsletter`, formValues);
      reset();
      console.log(response);
      toaster.success(response?.data?.message || "Successful");
      setIsRouting(false);
    } catch (err) {
      console.log(err);
      // @ts-ignore
      toaster.error(err?.response?.data?.message || "An error occured");
      setIsRouting(false);
    }
  };
  return (
    <section className="footer-style1 at-home15 pt60 pb-0 mx30">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-widget mb-4 mb-lg-5">
              <div className="mailchimp-widget mb90">
                <h6 className="title text-white mb20">Subscribe</h6>
                <form
                  className="mailchimp-style1 at-home15 bdrs12 overflow-hidden"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control"
                    placeholder="Your email address"
                  />
                  <button disabled={isRouting}>Send</button>
                </form>
              </div>
              <div className="row justify-content-between">
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="text-white h3 mb25">About</h6>
                    <div className="link-list">
                      {about.map((item, i) => (
                        <Link key={i} href={item.path}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="text-white h3 mb25">Categories</h6>
                    <ul className="ps-0">
                      {category.map((item, i) => (
                        <Link href={item.path} key={i}>
                          {item.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="text-white h3 mb25">Support</h6>
                    <ul className="ps-0">
                      {support.map((item, i) => (
                        <Link href={item.path} key={i}>
                          {item.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 offset-xl-2">
            <div className="footer-widget mb-4 mb-lg-5">
              <Link className="footer-logo" href="/">
                <Image
                  width={100}
                  height={20}
                  className="mb40"
                  src="/images/logo.png"
                  alt=" image "
                />
              </Link>
              <div className="row mb-4 mb-lg-5">
                <div className="col-auto">
                  <div className="contact-info">
                    <p className="info-title text-white mb-2">
                      Toll Free Customer Care
                    </p>
                    <h5 className="info-phone">
                      <a className="text-white" href="tel:+2348088844023">
                        08088844023
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="contact-info">
                    <p className="info-title text-white mb-2">
                      Need live support?
                    </p>
                    <h5 className="info-mail">
                      <a className="text-white" href="mailto:info@alakeys.com">
                        info@alakeys.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              {/* <div className="app-widget at-home9">
                <h5 className="title text-white mb20">Apps</h5>
                <div className="row mb-4 mb-lg-5">
                  <div className="col-auto">
                    <a href="#">
                      <div className="app-info d-flex align-items-center mb10 bdrs12">
                        <div className="flex-shrink-0 pr15 border-0">
                          <i className="fab fa-apple fz30 text-white"></i>
                        </div>
                        <div className="flex-grow-1">
                          <p className="app-text text-white fz13 mb0">
                            Download on the
                          </p>
                          <h6 className="app-title mb-1 text-white">
                            Apple Store
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="#">
                      <div className="app-info d-flex align-items-center mb10 bdrs12">
                        <div className="flex-shrink-0 pr15 border-0">
                          <i className="fab fa-google-play fz24 text-white"></i>
                        </div>
                        <div className="flex-grow-1">
                          <p className="app-text text-white fz13 mb0">
                            Get in on
                          </p>
                          <h6 className="app-title mb-1 text-white">
                            Google Play
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}
              <FooterSocial5 />
            </div>
          </div>
        </div>
      </div>
      <div className="container white-bdrt1 py-4">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-center text-lg-start">
              <p className="copyright-text mb-2 mb-md-0 text-white ff-heading">
                Copyright © {new Date().getFullYear()} Alakeys. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

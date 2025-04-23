"use client";

import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import toast from "react-hot-toast";

const serviceInquirySchema = yup.object({
  customerName: yup.string().required(" Full name is required"),
  email: yup.string().email().required(" Email is required"),
  projectName: yup.string().required("Project name is required"),
  message: yup.string().required("Message is required"),
});

export default function ServiceInquiryForm() {
  const [isRouting, setIsRouting] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(serviceInquirySchema) });

  const onSubmit = async (formValues) => {
    setIsRouting(true);
    try {
      const response = await axios.post(`/api/contactus`, formValues);
      toast.success(response?.data?.message || "Successful");
      setIsRouting(false);
      reset();
    } catch (err) {
      toast.error(err?.response?.data?.message || "An error occured");
      setIsRouting(false);
    }
  };
  return (
    <>
      <section className="pt-90">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-8 mx-auto">
              <div className="contact-page-form default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white">
                <h4 className="form-title mb25">
                  Tell us about your special need
                </h4>
                <form className="form-style1" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                          Full Name
                        </label>
                        <input
                          type="text"
                          {...register("customerName")}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          className="form-control"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                          Project Title
                        </label>
                        <input
                          {...register("projectName")}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
                          Project description
                        </label>
                        <textarea
                          cols={30}
                          rows={6}
                          {...register("message")}
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <button
                          type="submit"
                          className="ud-btn btn-thm"
                          disabled={isRouting}
                        >
                          Send Messages
                          <i className="fal fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/authStore";
import * as yup from "yup";

const forgetPasswordSchema = yup.object({
  email: yup.string().email().required(" Email is required"),
});

const ForgetPassword = () => {
  const { forgetPassword, loading } = useAuthStore();
  const router = useRouter();

  const { register, reset, getValues, handleSubmit } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const onSubmit = async (formValues) => {
    const response = await forgetPassword(formValues);
    localStorage.setItem("reset-email", getValues("email"));
    console.log("response", response);
    if (response) {
      reset();
      router.push("/forgot-password/new-password");
    }
  };
  return (
    <section className="our-login">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
            <div className="main-title text-center">
              <h2 className="title">Reset Password</h2>
              {/* <p className="paragraph">
              Give your visitor a smooth online experience with a solid UX
              design
            </p> */}
            </div>
          </div>
        </div>
        <div className="row wow fadeInRight" data-wow-delay="300ms">
          <div className="col-xl-6 mx-auto">
            <form
              className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb20">
                <label className="form-label fw600 dark-color">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="form-control"
                />
              </div>
              <div className="d-grid mb20">
                <button
                  className="ud-btn btn-thm"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Reset Password"}{" "}
                  <i className="fal fa-arrow-right-long" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

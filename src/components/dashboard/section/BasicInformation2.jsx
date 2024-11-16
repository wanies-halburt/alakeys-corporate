"use client";
import { useState } from "react";
import SelectInput from "../option/SelectInput";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DashboardNavigation from "../header/DashboardNavigation";

const createProjectSchema = yup.object().shape({
  project_title: yup.string().required("Project title is required"),
  project_description: yup.string().required("Project description is required"),
  category: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one category is required"),
  freelance_type: yup
    .string()
    .oneOf(
      ["Remote", "On-site", "Hybrid"],
      "Freelance type must be either Remote, Hybrid or On-site"
    )
    .required("Freelance type is required"),
  price_type: yup
    .string()
    .oneOf(["Hourly", "Fixed"], "Price type must be either Hourly or Fixed")
    .required("Price type is required"),
  price: yup.object().shape({
    mode: yup
      .string()
      .oneOf(["Range", "Fixed"], "Price mode must be either Range or Fixed")
      .required("Price mode is required"),
    value: yup.object().shape({
      min: yup
        .number()
        .min(0, "Minimum price must be 0 or more")
        .required("Minimum price is required"),
      max: yup
        .number()
        .min(0, "Maximum price must be 0 or more")
        .required("Maximum price is required"),
    }),
  }),
  project_duration: yup.object().shape({
    mode: yup
      .string()
      .oneOf(
        ["Fixed", "Range"],
        "Project duration mode must be either Fixed or Range"
      )
      .required("Duration mode is required"),
    value: yup.object().shape({
      min: yup
        .number()
        .min(0, "Minimum duration must be 0 or more")
        .required("Minimum duration is required"),
      max: yup.number().min(0, "Maximum duration must be 0 or more"),
    }),
  }),
  level: yup
    .string()
    .oneOf(
      ["Beginner", "Intermediate", "Expert"],
      "Level must be Beginner, Intermediate, or Expert"
    )
    .required("Level is required"),
  country: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one country is required"),
  city: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one city is required"),
  languages: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one language is required"),
  language_level: yup
    .string()
    .oneOf(
      ["Beginner", "Intermediate", "Fluent", "Native"],
      "Language level must be one of the valid levels"
    )
    .required("Language level is required"),
  proposal_status: yup
    .string()
    .oneOf(["Open", "Closed"], "Proposal status must be either Open or Closed")
    .required("Proposal status is required"),
  is_published: yup.boolean(),
});

const categories = [
  { option: "Web Development", value: "web-dev" },
  { option: "JavaScript", value: "js" },
  { option: "React", value: "react" },
  { option: "Node.js", value: "node" },
  { option: "CSS", value: "css" },
  {
    option: "Graphics & Design",
    value: "graphics-design",
  },
  {
    option: "Digital Marketing",
    value: "digital-marketing",
  },
  {
    option: "Writing & Translation",
    value: "writing-translation",
  },
  {
    option: "Video & Animation",
    value: "video-animation",
  },
  {
    option: "Music & Audio",
    value: "music-audio",
  },
  {
    option: "Programming & Tech",
    value: "programming-tech",
  },
  {
    option: "Business",
    value: "business",
  },
  {
    option: "Lifestyle",
    value: "lifestyle",
  },
  {
    option: "Trending",
    value: "trending",
  },
];
const freelanceTypes = [
  { option: "Remote/off-site", value: "Remote" },
  { option: "Hybrid", value: "Hybrid" },
  { option: "On-site", value: "On-site" },
];
const priceTypes = [
  { option: "Hourly", value: "Hourly" },
  { option: "Fixed", value: "Fixed" },
];
const level = [
  { option: "Beginner", value: "Beginner" },
  { option: "Intermediate", value: "Intermediate" },
  { option: "Expert", value: "Expert" },
];
const priceModes = [
  { option: "Range", value: "Range" },
  { option: "Fixed", value: "Fixed" },
];
const cities = [
  {
    option: "New York",
    value: "new-york",
  },
  {
    option: "Toronto",
    value: "toronto",
  },
  {
    option: "London",
    value: "london",
  },
  {
    option: "Sydney",
    value: "sydney",
  },
  {
    option: "Berlin",
    value: "berlin",
  },
  {
    option: "Tokyo",
    value: "tokyo",
  },
];
const countries = [
  {
    option: "USA",
    value: "USA",
  },
  {
    option: "UK",
    value: "UK",
  },
  {
    option: "Ghana",
    value: "Ghana",
  },
  {
    option: "Nigeria",
    value: "Nigeria",
  },
  {
    option: "Berlin",
    value: "berlin",
  },
  {
    option: "Tokyo",
    value: "tokyo",
  },
];

export default function BasicInformation2() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProjectSchema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data); // Data is validated and ready to be used
  };
  console.log("watching", watch());
  return (
    <>
      <div className="row pb40">
        <div className="col-lg-12">
          <DashboardNavigation />
        </div>
        <div className="col-lg-9">
          <div className="dashboard_title_area">
            <h2>Create Project</h2>
            <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-lg-end">
            <a className="ud-btn btn-dark">
              Save &amp; Publish
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Basic Information</h5>
        </div>
        <div className="col-xl-8">
          <form className="form-style1" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-12">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Project Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="i will"
                    {...register("project_title")}
                  />
                  {errors.project_title && (
                    <p className=" text-danger">
                      {errors.project_title.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="category"
                    control={control}
                    defaultValue={[]} // Initialize with an empty array
                    render={({ field }) => (
                      <SelectInput
                        label="Categories"
                        data={categories}
                        defaultSelect={field.value}
                        handler={field.onChange} // Use onChange to update react-hook-form
                        isMultiple={true}
                      />
                    )}
                  />
                  {errors.category && (
                    <p className=" text-danger">{errors.category.message}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="freelance_type"
                    control={control}
                    defaultValue={[]} // Initialize with an empty array
                    render={({ field }) => (
                      <SelectInput
                        label="Freelancer Type"
                        data={freelanceTypes}
                        defaultSelect={field.value}
                        handler={field.onChange} // Use onChange to update react-hook-form
                        isMultiple={false}
                      />
                    )}
                  />
                  {errors.freelance_type && (
                    <p className=" text-danger">
                      {errors.freelance_type.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="price_type"
                    control={control}
                    defaultValue="" // Set default value
                    render={({ field }) => (
                      <SelectInput
                        label="Price Type"
                        data={priceTypes}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={false}
                      />
                    )}
                  />
                  {errors.price_type && (
                    <p className=" text-danger">{errors.price_type.message}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="price.mode"
                    control={control}
                    defaultValue="" // Set default value
                    render={({ field }) => (
                      <SelectInput
                        label="Price Mode"
                        data={priceModes}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={false}
                      />
                    )}
                  />
                  {errors.price?.mode && (
                    <p className=" text-danger">{errors.price.mode.message}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Minimum Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Minimum Price"
                    {...register("price.value.min")}
                  />
                  {errors.price?.value?.min && (
                    <p className=" text-danger">
                      {errors.price.value.min.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Maximum Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Maximum Price"
                    {...register("price.value.max")}
                  />
                  {errors.price?.value?.max && (
                    <p className=" text-danger">
                      {errors.price.value.max.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="project_duration.mode"
                    control={control}
                    defaultValue="" // Set default value
                    render={({ field }) => (
                      <SelectInput
                        label="Project Duration"
                        data={priceModes}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={false}
                      />
                    )}
                  />
                  {errors.project_duration?.mode && (
                    <p className=" text-danger">
                      {errors.project_duration.mode.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Minimum number of weeks
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Minimum number of weeks"
                    {...register("project_duration.value.min")}
                  />
                  {errors.project_duration?.value?.min && (
                    <p className=" text-danger">
                      {errors.project_duration.value.min.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Maximum number of Weeks
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Maximum number of Weeks"
                    {...register("project_duration.value.max")}
                  />
                  {errors.project_duration?.value?.max && (
                    <p className=" text-danger">
                      {errors.project_duration.value.max.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="level"
                    control={control}
                    defaultValue="" // Set default value
                    render={({ field }) => (
                      <SelectInput
                        label="Skills Level"
                        data={level}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={false}
                      />
                    )}
                  />
                  {errors.level && (
                    <p className=" text-danger">{errors.level.message}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="country"
                    control={control}
                    defaultValue="" // Set default value
                    render={({ field }) => (
                      <SelectInput
                        label="Countries allowed"
                        data={countries}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={true}
                      />
                    )}
                  />
                  {errors.country && (
                    <p className=" text-danger">{errors.country.message}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="city"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <SelectInput
                        label="Cities allowed"
                        data={countries}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={true}
                      />
                    )}
                  />
                  {errors.city && (
                    <p className=" text-danger">{errors.city.message}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="languages"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <SelectInput
                        label="Languages required"
                        data={[
                          {
                            option: "English",
                            value: "english",
                          },
                          {
                            option: "French",
                            value: "french",
                          },
                          {
                            option: "German",
                            value: "german",
                          },
                          {
                            option: "Japanese",
                            value: "japanese",
                          },
                        ]}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={true}
                      />
                    )}
                  />
                  {errors.languages && (
                    <p className=" text-danger">{errors.languages.message}</p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="language_level"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <SelectInput
                        label="Languages Level"
                        data={[
                          {
                            option: "Beginner",
                            value: "Beginner",
                          },
                          {
                            option: "Intermediate",
                            value: "intermediate",
                          },
                          {
                            option: "Fluent",
                            value: "Fluent",
                          },
                          {
                            option: "Native",
                            value: "Native",
                          },
                        ]}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={false}
                      />
                    )}
                  />
                  {errors.language_level && (
                    <p className=" text-danger">
                      {errors.language_level.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="proposal_status"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <SelectInput
                        label="Proposal Status"
                        data={[
                          {
                            option: "Open",
                            value: "Open",
                          },
                          {
                            option: "Closed",
                            value: "Closed",
                          },
                        ]}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={false}
                      />
                    )}
                  />
                  {errors.proposal_status && (
                    <p className=" text-danger">
                      {errors.proposal_status.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <Controller
                    name="is_published"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <SelectInput
                        label="Proposal Status"
                        data={[
                          {
                            option: "true",
                            value: "true",
                          },
                          {
                            option: "false",
                            value: "false",
                          },
                        ]}
                        defaultSelect={field.value}
                        handler={field.onChange}
                        isMultiple={false}
                      />
                    )}
                  />
                  {errors.is_published && (
                    <p className=" text-danger">
                      {errors.is_published.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb10">
                  <label className="heading-color ff-heading fw500 mb10">
                    Project Details
                  </label>
                  <textarea
                    cols={30}
                    rows={6}
                    placeholder="Description"
                    {...register("project_description")}
                  />
                  {errors.project_description && (
                    <p className=" text-danger">
                      {errors.project_description.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-start">
                  <button className="ud-btn btn-thm" type="submit">
                    Save
                    <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

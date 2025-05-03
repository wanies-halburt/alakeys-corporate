"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFullName(user.fullName);
    setPhone(user.phone);
    setUserName(user.userName);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const token = localStorage.getItem("alakeys-token");

    const payload = {
      fullName,
      userName,
      phone,
      oldPassword,
      newPassword,
    };
    try {
      const res = await axios.patch(`/api/update-user`, payload, {
        headers: {
          authorization: `${token}`, // Assuming you're using a Bearer token
        },
      });
      toast.success(res.data?.message || "Profile Updated successfully");
      console.log("order response", res);
      setIsLoading(false);
    } catch (err) {
      toast.error(err?.response?.data?.message || "An error occured");
    }
  };
  return (
    <div className=" p-5">
      <h3 className="title text-center fw-bold pb-3">User Profile</h3>
      <form className="form2">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb25">
              <h6 className="mb15">Full name</h6>
              <input
                className="form-control"
                type="text"
                name="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb25">
              <h6 className="mb15">User name</h6>
              <input
                className="form-control"
                type="text"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb25">
              <h6 className="mb15">Phone Number</h6>
              <input
                className="form-control"
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb25">
              <h6 className="mb15">Email</h6>
              <input
                className="form-control"
                type="email"
                name="email"
                value={user?.email}
                disabled
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="mb25">
              <h6 className="mb15">Old Password</h6>
              <input
                className="form-control"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="mb25">
              <h6 className="mb15">New Password</h6>
              <input
                className="form-control"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            disabled={isLoading}
            onClick={handleSubmit}
            isLoading={isLoading}
            className="ud-btn btn-thm"
          >
            Update User details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

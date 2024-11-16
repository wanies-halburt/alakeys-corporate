"use client";

import BasicInformation2 from "./BasicInformation2";
import UploadAttachment from "./UploadAttachment";

export default function CreateProjectInfo() {
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row">
          <div className="col-xl-12">
            <BasicInformation2 />
            <UploadAttachment />
          </div>
        </div>
      </div>
    </>
  );
}

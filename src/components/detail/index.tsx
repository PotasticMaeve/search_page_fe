import { Button } from "@mantine/core";
import LeftContent from "./LeftContent";
import { useNavigate, useParams } from "react-router-dom";
import { useJobContext } from "../../context/jobContext";
import { useEffect } from "react";
import RightContent from "./RightContent";

const Detail = () => {
  const { id } = useParams();
  const { fetchJobDetail, jobDetail } = useJobContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    if (id) {
      fetchJobDetail(id);
    }
  }, [id]);

  if (!jobDetail) {
    return <div>Job not found!</div>;
  }

  return (
    <div className="py-[20px] px-[15px] sm:px-[20px] md:px-[30px]">
      <Button className="bg-[#0891b2]" onClick={() => navigate(-1)}>
        Back
      </Button>

      <div className="py-[20px]">
        <p className="text-gray-600 text-[14px] md:text-[17px]">
          {jobDetail.type} / {jobDetail.location}
        </p>
        <h1 className="text-[20px] md:text-[30px] font-bold text-blue-600">
          {jobDetail.title}
        </h1>
      </div>

      <hr className=" mb-4 border-[#ccc]" />
      <div className="flex flex-col-reverse md:flex-row gap-[50px]">
        <div className="md:w-4/5 w-full">
          <LeftContent />
        </div>
        <div className="md:w-1/5 w-full mt-6 md:mt-0">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default Detail;

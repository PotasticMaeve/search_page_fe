import { Image } from "@mantine/core";
import { useJobContext } from "../../context/jobContext";

const RightContent = () => {
  const { jobDetail } = useJobContext();

  if (!jobDetail) {
    return <div>loading...</div>;
  }

  const topBox = () => (
    <div
      className="h-[auto] p-[20px] mb-[30px]"
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <h3 className="font-bold">{jobDetail.company}</h3>
      <Image
        src={jobDetail.company_logo}
        width={250}
        height={250}
        style={{ objectFit: "contain" }}
        alt="company-logo"
      />
      <a href={jobDetail.company_url} className="text-blue-600">
        {jobDetail.company_url}
      </a>
    </div>
  );

  const bottomBox = () => (
    <div
      className="h-[auto] p-[20px] mb-[30px] bg-yellow-50 text-ellipsis"
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <h3 className="font-bold">How to apply</h3>
      <hr className=" mb-4 border-[#ccc]" />
      <div
        className="text-gray-500 mt-2 job-description line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: jobDetail.how_to_apply,
        }}
      />
    </div>
  );

  return (
    <>
      {topBox()}
      {bottomBox()}
    </>
  );
};

export default RightContent;

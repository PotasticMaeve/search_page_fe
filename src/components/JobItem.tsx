import { JobDto } from "../context/jobContext";
import { getTimeAgo } from "../helper";

interface JobItemPropsDto {
  job: JobDto;
}

const JobItem = (props: JobItemPropsDto) => {
  const { job } = props;
  return (
    <li
      key={job.id}
      className="py-2"
      style={{ borderBottom: ".9px solid #eaeaea" }}
    >
      <div className="flex w-full justify-between">
        <h3 className="text-[#1d4ed8] text-[17px] md:text-[20px] font-bold">
          {job.title}
        </h3>
        <p className="text-[14px] md:text-[15px]">{job.location}</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-[#808080] text-[13px] md:text-[14px]">
          {job.company} -{" "}
          <span className="text-[#15803d] font-bold">{job.type}</span>
        </p>
        <p className="text-[#808080] text-[13px] md:text-[14px]">
          {getTimeAgo(job.created_at)}
        </p>
      </div>
    </li>
  );
};

export default JobItem;

import { useNavigate } from "react-router-dom";
import { getTimeAgo } from "../../helper";
import { JobDto } from "../../dto/JobDto";

interface JobItemPropsDto {
  job: JobDto;
}

const JobItem = (props: JobItemPropsDto) => {
  const { job } = props;
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <li
      key={job.id}
      className="py-4 cursor-pointer border-b border-gray-200 hover:bg-gray-50 transition-all"
      onClick={navigateToDetail}
    >
      <div className="flex flex-col md:flex-row md:justify-between">
        <h3 className="text-blue-600 text-sm sm:text-base md:text-lg font-bold">
          {job.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 md:mt-0">
          {job.location}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-2">
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">
          {job.company} -{" "}
          <span className="text-green-600 font-bold">{job.type}</span>
        </p>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 md:mt-0">
          {getTimeAgo(job.created_at)}
        </p>
      </div>
    </li>
  );
};

export default JobItem;

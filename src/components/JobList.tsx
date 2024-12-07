import { useJobContext } from "../context/jobContext";
import JobItem from "./JobItem";

const JobList = () => {
  const { jobs } = useJobContext();
  return (
    <div className="bg-[#fff] px-[30px] py-[15px]">
      <h1 className="text-[17px] md:text-[24px] font-bold">Job List</h1>
      <hr className="mt-4" />
      <ul>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default JobList;

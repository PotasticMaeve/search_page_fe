import { Button } from "@mantine/core";
import { useEffect, useMemo } from "react";
import { useJobContext } from "../../context/jobContext";
import JobItem from "./JobItem";

const JobList = () => {
  const {
    jobs,
    page,
    loading,
    searchParams,
    disabledLoadMore,
    setPage,
    fetchJobs,
  } = useJobContext();

  useEffect(() => {
    fetchJobs();
  }, [page, searchParams]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const headText = useMemo(() => {
    const { description, location, isFulltime } = searchParams;
    
    if (searchParams && (description || location || isFulltime)) {
      const jobCount = jobs.length;
      if (jobCount > 1) {
        return `Showing ${jobCount} Jobs`;
      } else if (jobCount === 1) {
        return `Showing 1 Job`;
      } else {
        return "No Jobs Found";
      }
    }
    return "Job List";
  }, [jobs.length, searchParams]);

  return (
    <div className="bg-[#fff] px-[15px] sm:px-[20px] md:px-[30px] py-[20px] sm:py-[20px]">
      <h1 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-center md:text-left">
        {headText}
      </h1>
      <hr className="mt-4" />
      <ul className=" mt-4">
        {jobs.map((job, i) => (
          <JobItem key={`${job.id}-${i}`} job={job} />
        ))}
      </ul>
      <Button
        fullWidth
        loading={loading}
        disabled={disabledLoadMore}
        className="mt-[20px] bg-[#0891b2] text-sm sm:text-base"
        onClick={handleLoadMore}
      >
        <p>More Jobs</p>
      </Button>
    </div>
  );
};

export default JobList;

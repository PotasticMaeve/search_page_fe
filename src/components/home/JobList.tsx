import { Button } from "@mantine/core";
import { useEffect } from "react";
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

  return (
    <div className="bg-[#fff] px-[30px] py-[15px]">
      <h1 className="text-[17px] md:text-[24px] font-bold">Job List</h1>
      <hr className="mt-4" />
      <ul>
        {jobs.map((job, i) => (
          <JobItem key={`${job.id}-${i}`} job={job} />
        ))}
      </ul>
      <Button
        fullWidth
        loading={loading}
        disabled={disabledLoadMore}
        className="my-[20px] bg-[#0891b2]"
        onClick={handleLoadMore}
      >
        <p>More Jobs</p>
      </Button>
    </div>
  );
};

export default JobList;

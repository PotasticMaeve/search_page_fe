import { ReactNode, createContext, useContext, useState } from "react";

export interface JobDto {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}

interface JobContextPropsDto {
  jobs: JobDto[];
  page: number;
  loading: boolean;
  disabledLoadMore: boolean;
  searchParams: {
    description: string;
    location: string;
    isFulltime: boolean;
  };
  jobDetail: JobDto | null;
  setJobs: React.Dispatch<React.SetStateAction<JobDto[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setDisabledLoadMore: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchParams: React.Dispatch<
    React.SetStateAction<{
      description: string;
      location: string;
      isFulltime: boolean;
    }>
  >;
  setJobDetail: React.Dispatch<React.SetStateAction<JobDto | null>>;
  fetchJobs: () => void;
  fetchJobDetail: (id: string) => void;
}

const JobContext = createContext<JobContextPropsDto | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [jobs, setJobs] = useState<JobDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabledLoadMore, setDisabledLoadMore] = useState<boolean>(false);
  const [jobDetail, setJobDetail] = useState<JobDto | null>(null);
  const [searchParams, setSearchParams] = useState({
    description: "",
    location: "",
    isFulltime: false,
  });

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const { description, location, isFulltime } = searchParams;

      const url = new URL(`${apiURL}/recruitment/positions.json`);
      const params: Record<string, string> = { page: page.toString() };

      if (description) params.description = description;
      if (location) params.location = location;
      if (isFulltime) params.full_time = "true";

      url.search = new URLSearchParams(params).toString();

      const response = await fetch(url.toString());
      const data = await response.json();
      if (Array.isArray(data)) {
        const filteredData = data.filter((job) => job !== null);

        if (filteredData.length < data.length) {
          setDisabledLoadMore(true);
        }

        if (description || location || isFulltime) {
          setJobs(filteredData);
        } else {
          setJobs((prevJobs) => [...prevJobs, ...filteredData]);
        }
      } else {
        setJobs([]);
      }
    } catch (error) {
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchJobDetail = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiURL}/recruitment/positions/${id}`);
      const data = await response.json();
      setJobDetail(data);
    } catch (error) {
      setJobDetail(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        page,
        loading,
        searchParams,
        disabledLoadMore,
        jobDetail,
        setJobs,
        setPage,
        setLoading,
        setSearchParams,
        setDisabledLoadMore,
        setJobDetail,
        fetchJobs,
        fetchJobDetail,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within JobContext");
  }
  return context;
};

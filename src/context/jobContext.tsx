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
  fetchJobs: () => void;
}

const JobContext = createContext<JobContextPropsDto | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [jobs, setJobs] = useState<JobDto[]>([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "https://dev6.dansmultipro.com/api/recruitment/positions.json"
      );
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <JobContext.Provider value={{ jobs, fetchJobs }}>
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

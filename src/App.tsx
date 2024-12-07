import { useEffect } from "react";
import { useJobContext } from "./context/jobContext";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  const { fetchJobs } = useJobContext();

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Search />
      <JobList />
    </>
  );
}

export default App;

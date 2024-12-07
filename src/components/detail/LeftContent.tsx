import { useJobContext } from "../../context/jobContext";

const LeftContent = () => {
  const { jobDetail } = useJobContext();

  if (!jobDetail) {
    return <div>loading...</div>;
  }

  return (
    <div
      className="text-gray-500 mt-2 job-description"
      dangerouslySetInnerHTML={{ __html: jobDetail.description }}
    />
  );
};

export default LeftContent;

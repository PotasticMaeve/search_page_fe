import { useEffect } from "react";
import { useJobContext } from "../../context/jobContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useJobContext()

  useEffect(() => {
    const storedToken = sessionStorage.getItem("google_token");
    if (storedToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("google_token");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <div className="flex bg-[#1d4ed8] h-[60px] md:h-[80px] items-center px-[15px] sm:px-[20px] md:px-[30px]">
      <p className="text-[#fff] text:18px md:text-[24px] font-bold">
        Claudia <span className="font-normal">Jobs</span>
      </p>
      {isLoggedIn && (
        <button
          className="ml-auto text-[#fff] px-4 py-2 bg-red-500 rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;

import { GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import { useJobContext } from "./context/jobContext";

function App() {
  const { user, setUser } = useJobContext()

  const handleLoginSuccess = (response: any) => {
    sessionStorage.setItem("google_token", response.credential);
    setUser({ token: response.credential });
  };

  const handleLoginFailure = () => {
    sessionStorage.removeItem("google_token");
    setUser({ token: null });
  };

  useEffect(() => {
    const storedCredential = sessionStorage.getItem("google_token");
    if (storedCredential) {
      setUser({ token: storedCredential });
    }
  }, []);

  return (
    <>
      {!user ? (
        <div className="flex flex-col justify-center items-center w-full h-[100vh]">
          <h2 className="mb-3 font-bold">Please Log In to Continue</h2>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        </div>
      ) : (
        <AppRoutes />
      )}
    </>
  );
}

export default App;

import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credit", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Credit API response:", data);

      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      } else {
        console.error("API response was not successful:", data.message);
        toast.error(data.message || "Failed to load credits.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance == 0) {
          navigate("/credit");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    toast.success("Logged out successfully!");
  };

  const value = {
    user,
    setUser,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

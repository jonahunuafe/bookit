import { createContext, useContext, useState, useEffect } from "react";
import checkAuth from "@/app/actions/checkAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const { isAuthenticated, user } = await checkAuth();

      // Set the actual state of our UI globally
      setIsAuthenticated(isAuthenticated);
      setCurrentUser(user);
    }

    checkAuthentication();
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuthenticated,            /* These values can be set from anywhere in the application */
      setIsAuthenticated,
      currentUser,
      setCurrentUser
    }}>
      { children }
    </AuthContext.Provider>
  )
}

// Create a custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
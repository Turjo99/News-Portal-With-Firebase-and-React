import React, { createContext } from "react";
import app from "../firebase/firebase.init";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const AuthContext = createContext();
  const authInfo = {};

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   setUser(currentUser);
      console.log("Auth State Changed", currentUser);
      //   setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;

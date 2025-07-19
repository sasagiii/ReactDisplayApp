import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [myInfo, setMyInfo] = useState(null);
  const [MyExpLst, setMyExpLst] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // here the data are just my static info
    async function loadAppData() {
      setMyInfo({
        name: "Sami",
        title: ".NET and React - Developer",
        desc: "Hello, I'm Sami, a software engineer based in Toulouse, France. I'm passionate about new technologies and programming. My focus is on applications in C# and React, but I'm always curious about everything tech-related. In my free time, I start new projects on GitHub, hit the swimming pool, cook, and enjoy participating in language exchanges to learn about other cultures.",
      });
      setLoading(false);
    }

    loadAppData();
  }, []);

  return (
    <AppContext.Provider value={{ myInfo, loading }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };

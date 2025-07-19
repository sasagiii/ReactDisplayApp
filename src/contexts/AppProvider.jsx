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

      setMyExpLst([
        {
          title: ".NET Software Developer for Airbus",
          desc: "Development and maintenance of software supporting assisted assembly lines for manufacturing. This critical software is used internationally in England, Germany, France, and Spain, with over 1,000 users.",
          year: "Dec 2023 - Now",
        },
        {
          title: "C++ Qt Software Developer for Airbus",
          desc: "Development and maintenance of software for editing specification sheets of critical systems for aeronautics in C++ Qt.",
          year: "Nov 2021 – Dec 2023",
        },
        {
          title:
            "C++ Developer Internship for Liebherr Aerospace and Transportation",
          desc: "Optimization of a fluid properties calculation DLL, utilized by multiple simulation software. Additionally, a DLL was developed to manipulate diverse fluid data, addressing specific user needs.",
          year: "Feb 2021 – Aug 2021",
        },
      ]);

      setLoading(false);
    }

    loadAppData();
  }, []);

  return (
    <AppContext.Provider value={{ myInfo, loading, MyExpLst }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };

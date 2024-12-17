import { useEffect, useState } from "react";
import { ApiContext } from "./contexts";
import { fetchData } from "../api/axios";

const ApiContextProvider = ({ children }) => {
  const [tests, setTests] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchTasksAndCategories = async () => {
      try {
        const testsResponse = await fetchData("/tests");
        const categoriesResponse = await fetchData("/categories");

        setTests(testsResponse);
        setCategories(categoriesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasksAndCategories();
  }, []);

  return (
    <ApiContext.Provider value={{ tests, categories }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;

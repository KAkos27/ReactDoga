import { useContext, useState } from "react";
import { ApiContext } from "../context/contexts";
import Question from "./Question";
import CategorySelect from "./CategorySelect";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const { tests } = useContext(ApiContext);

  const handleSelectCategory = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="main-page">
      <CategorySelect onSelectCategory={handleSelectCategory} />
      {tests && (
        <>
          {tests.map((test) => (
            <Question key={test.id} id={test.id} category={selectedCategory} />
          ))}
        </>
      )}
    </div>
  );
};

export default MainPage;

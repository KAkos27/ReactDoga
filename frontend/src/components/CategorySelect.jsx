import { useContext } from "react";
import { ApiContext } from "../context/contexts";

const CategorySelect = ({ onSelectCategory }) => {
  const { categories } = useContext(ApiContext);

  return categories ? (
    <select onChange={(e) => onSelectCategory(e.target.value)}>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  ) : (
    <></>
  );
};

export default CategorySelect;

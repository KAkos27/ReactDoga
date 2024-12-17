import { useContext, useState } from "react";
import { ApiContext } from "../context/contexts";

const Question = ({ id, category }) => {
  const [classNames, setClassNames] = useState([]);

  const { tests } = useContext(ApiContext);

  const currentTest = tests?.find(
    (task) => task.id === id && task.category_id == category
  );

  const buttons = [
    currentTest?.a1,
    currentTest?.a2,
    currentTest?.a3,
    currentTest?.a4,
  ];

  const handleClickButton = (btnValue, i) => {
    const newClassNames = ["", "", "", ""];

    if (btnValue === currentTest.a1) {
      newClassNames[i] = "right";
    } else {
      newClassNames[i] = "wrong";
    }

    setClassNames([...newClassNames]);
  };

  return currentTest ? (
    <div>
      <h2>{currentTest.question}</h2>
      <div>
        {buttons.map((btnValue, i) => (
          <button
            className={classNames[i]}
            onClick={() => handleClickButton(btnValue, i)}
            key={i}
          >
            {btnValue}
          </button>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Question;

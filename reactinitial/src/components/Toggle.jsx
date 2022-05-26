import React, { useState } from "react";

function Toggle() {
  const [isVaccinated, setIsVaccinated] = useState(false);

  const handleIsVaccinated = () => {
    setIsVaccinated(!isVaccinated);
  };

  return (
    <div>
      <button onClick={handleIsVaccinated}>
        {!isVaccinated ? "True" : "False"}
      </button>
    </div>
  );
}

export default Toggle;

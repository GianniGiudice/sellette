import React, { useState } from "react";

const RandomMember = ({ members }) => {
  const [randomMember, setRandomMember] = useState();

  const getRandomMember = () => {
    if (members.length > 0) {
      const member = members[Math.floor(Math.random() * members.length)];
      setRandomMember(member.name);
    }
  };

  const getText = () => {
    if (members.length > 0) {
      return (
        <div className="mt-3 xl-text">
          C'est au tour de ..{" "}
          <span className="xxl-text text-info font-weight-bold">
            {randomMember}
          </span>
        </div>
      );
    }
    return <div></div>;
  };

  return (
    <div>
      <button onClick={getRandomMember} className="btn btn-info mt-5 w-100">
        LANCER LA SELLETTE
      </button>
      {getText()}
    </div>
  );
};

export { RandomMember };

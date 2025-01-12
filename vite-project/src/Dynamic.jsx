import React from "react";

const Dynamic = () => {
  let name = "Rizwan";
  let fullName = () => {
    return "Rizwan Ahamad";
  };
  return (
    <div>
      my name is {name} and my full name is {fullName()}.
    </div>
  );
};

export default Dynamic;

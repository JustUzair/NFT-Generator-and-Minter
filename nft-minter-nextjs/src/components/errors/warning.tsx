import React from "react";

const Warning = ({ message }: { message: string }) => {
  return (
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p className="font-bold">Warning!</p>
      <p>{message}</p>
    </div>
  );
};

export default Warning;

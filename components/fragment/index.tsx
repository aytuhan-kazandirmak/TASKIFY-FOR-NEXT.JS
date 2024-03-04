import React from "react";
type IProps = {
  children: React.ReactNode;
};
const MyFragment: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      {children}
    </div>
  );
};

export default MyFragment;

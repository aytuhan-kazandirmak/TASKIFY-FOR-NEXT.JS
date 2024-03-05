import SiderbarComponent from "@/components/sidebar";
import { IProps } from "@/components/type/common";
import React from "react";

const BoardsLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex w-full pt-5">
      <div className="w-[18%]">
        <SiderbarComponent />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BoardsLayout;

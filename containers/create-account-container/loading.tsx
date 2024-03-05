import MyFragment from "@/components/fragment";
import Skeleton from "@/components/skeleton";
import React from "react";

const CreateAccountContainerLoading = () => {
  return (
    <MyFragment>
      <div className="flex max-w-md flex-col gap-5 w-1/4">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} width={384} height={42} />
          ))}
      </div>
    </MyFragment>
  );
};

export default CreateAccountContainerLoading;

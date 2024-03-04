import MyFragment from "@/components/fragment";
import Skeleton from "@/components/skeleton";

const LoginContainerLoading = () => {
  return (
    <MyFragment>
      <div className="flex max-w-md flex-col gap-5 w-1/4">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} width={384} height={52} />
          ))}
      </div>
    </MyFragment>
  );
};

export default LoginContainerLoading;

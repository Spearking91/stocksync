import { Magento } from "@boxicons/react";


const Loading = () => {
  return (
    <div className="min-h-screen justify-center items-center">
      <div className="aura aura-dual text-primary duration-500 rounded-full p-2 ">
        <div className="bg-base-100 rounded-full">
          <Magento className="size-20" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

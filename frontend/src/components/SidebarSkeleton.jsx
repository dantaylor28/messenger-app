const SidebarSkeleton = () => {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div className="bg-gray-300 animate-pulse w-10 h-10 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-1">
            <div className="bg-gray-300 animate-pulse h-4 w-40 rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-40 rounded"></div>
          </div>
        </div>
      </>
    );
  };
  
  export default SidebarSkeleton;
  
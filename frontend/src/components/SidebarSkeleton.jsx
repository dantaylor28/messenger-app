const SidebarSkeleton = () => {
    return (
      <>
        <div className="flex gap-4 items-center mt-8">
          <div className="bg-gray-300 animate-pulse w-12 h-12 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-1">
            <div className="bg-gray-300 animate-pulse h-4 w-60 rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-40 rounded"></div>
          </div>
        </div>
      </>
    );
  };
  
  export default SidebarSkeleton;
  
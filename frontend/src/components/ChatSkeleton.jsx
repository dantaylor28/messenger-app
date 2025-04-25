const ChatSkeleton = () => {
  return (
    <>
      {/* Left-aligned message skeleton */}
      <div className="flex gap-4 items-center">
        <div className="bg-gray-300 dark:bg-white/10 animate-pulse w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="bg-gray-300 dark:bg-white/10 animate-pulse h-4 w-52 rounded"></div>
          <div className="bg-gray-300 dark:bg-white/10 animate-pulse h-4 w-52 rounded"></div>
        </div>
      </div>

      {/* Right-aligned message skeleton */}
      <div className="flex gap-4 items-center justify-end mt-4">
        <div className="flex flex-col gap-1">
          <div className="bg-gray-300 dark:bg-white/10 animate-pulse h-4 w-52 rounded"></div>
        </div>
        <div className="bg-gray-300 dark:bg-white/10 animate-pulse w-10 h-10 rounded-full shrink-0"></div>
      </div>
    </>
  );
};

export default ChatSkeleton;

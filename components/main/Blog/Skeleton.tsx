function Skeleton() {
  return (
    <div className="relative w-full md:w-auto lg:w-auto  mx-auto min-h-[110px] py-5 flex items-center">
      <div className="skeleton-container bg-gray-50/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
      w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <div className="skeleton-element w-full p-4 rounded-lg bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
        <div className="skeleton-element w-full mt-2 p-2 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></div>
        <div className="skeleton-element w-2/4 mt-2 p-2 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></div>

        <div className="skeleton-element w-full h-52 my-5 rounded-lg bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="skeleton-element w-24 p-2 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></div>
            <div className="skeleton-element w-24 p-2 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></div>
          </div>
          <div className="skeleton-element w-24 p-2 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;

import { Loader2Icon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Loader2Icon className="h-8 w-8 animate-spin text-green-500" />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 text-xs text-white bg-black/60 px-3 py-1.5 rounded-md text-center max-w-[80vw]">First load can take up to a minute. Subsequent visits will be instant.</p>
    </div>
  );
};
export default Loading;

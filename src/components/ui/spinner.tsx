import { LoaderIcon } from "lucide-react";

export default function Spinner() {
  return <LoaderIcon className="animate-spin" />;
}

export function PageSpinner() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
}

import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen w-full flex justify-center items-center">
      {children}
    </main>
  );
}

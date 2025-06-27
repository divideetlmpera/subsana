import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center">
      <div className="w-full max-w-screen-sm px-4 text-center">
        {children}
      </div>
    </div>
  );
}
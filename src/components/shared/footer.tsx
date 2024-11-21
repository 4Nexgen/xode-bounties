export function Footer() {
  return (
    <div className="border-t border-theme-border">
      <div className="bg-theme-blue-dark text-white">
        <div className="container mx-auto">
          <div className="flex items-center py-4 justify-between">
            <div className="flex flex-col gap-2">
              <img src="/logo.webp" alt="Xode Logo" className="h-10 w-fit" />
            </div>
            <div>Social Media Links here</div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container mx-auto">
          <div className="flex items-center py-4 justify-between">
            <p className="text-xs text-slate-200">
              Copyright © 2024 Xode Blockchain. All rights reserved.
            </p>
            <p className="text-xs">v1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import React from "react";

const ShimmerButton = ({
  onClickHandler,
  btnText,
  className,
  disabled,
}: {
  onClickHandler?: any;
  btnText: string;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClickHandler ? onClickHandler : () => {}}
      disabled={disabled || false}
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-2 border-zinc-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      {btnText}
    </button>
  );
};

export default ShimmerButton;

import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";

interface TimestampHighlightProps {
  from: string;
  to: string;
  className?: string;
  iconClassName?: string;
}

const TimestampHighlight: React.FC<TimestampHighlightProps> = ({
  from,
  to,
  className,
  iconClassName,
}) => {
  return (
    <>
      <div
        className={`w-[225px] h-[51px] bg-[#0080001a] text-[#008000] flex items-center justify-center font-philosopher py-[8px] px-[14px] rounded-[10px] text-md leading-[16px] ${className}`}
      >
        <MdOutlineWatchLater
          className={`block text-[25px] mr-1 ${iconClassName}`}
        />
        From {from} - {to}
      </div>
    </>
  );
};

export default TimestampHighlight;

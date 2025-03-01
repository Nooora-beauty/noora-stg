import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import React, { Suspense, useEffect, useRef, useState } from "react";
const FlipText = dynamic(() => import("@/components/ui/flip-text"), {
  loading: () => <div className="bg-[#FDF2F2]">loading...</div>,
  ssr: false,
});

interface FlippingListProps {
  locationList: {
    id: number;
    name?: string;
  }[];
  className?: string;
}

const FlippingList: React.FC<FlippingListProps> = ({
  locationList,
  className,
}) => {
  const [displayedLocationsList1, setDisplayedLocationsList1] = useState<
    Array<{ name: string }>
  >(
    locationList
      .filter((location) => location.name) // Ensure only items with `name` are included
      .map((location) => ({ name: location.name! })) // Safely extract `name` since it's filtered
      .slice(0, 9)
  );

  const locationsRefList = useRef(displayedLocationsList1);

  useEffect(() => {
    console.log("running useEffect on Footer");
    setDisplayedLocationsList1(
      locationList
        .filter((location) => location.name) // Ensure `name` is defined
        .map((location) => ({ name: location.name! })) // Map to correct structure
        .slice(0, 9)
    );

    locationsRefList.current = locationList
      .filter((location) => location.name)
      .map((location) => ({ name: location.name! }))
      .slice(0, 9);

    const interval = setInterval(() => {
      // Get remaining locations not currently displayed
      const remainingLocationsList = locationList.filter(
        (loc) =>
          !locationsRefList.current.some(
            (displayed) => displayed.name === loc.name
          )
      );

      if (remainingLocationsList.length > 0) {
        // Pick random index to replace
        const replaceIndexList1 = Math.floor(Math.random() * 9);
        // Pick random new location
        const newLocationList1 =
          remainingLocationsList[
            Math.floor(Math.random() * remainingLocationsList.length)
          ];

        // Update after animation starts
        setTimeout(() => {
          setDisplayedLocationsList1((prev) => {
            const updated = [...prev];
            if (newLocationList1 && newLocationList1.name) {
              // Ensure `newLocationList1` and `name` exist before updating
              updated[replaceIndexList1] = { name: newLocationList1.name }; // Map to correct structure
              locationsRefList.current = updated; // Update ref
            }
            return updated;
          });
        }, 300);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {displayedLocationsList1?.map((location, index) => {
        return (
          <div
            key={`${location.name}-${index}`}
            className={cn("font-philosopher", className)}
          >
            <Suspense fallback={<div>{location?.name}</div>}>
              <FlipText
                className="!mx-[1px]"
                duration={0.1}
                word={location?.name}
              />
            </Suspense>
          </div>
        );
      })}
    </>
  );
};

export default FlippingList;

"use client";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

import React from "react";
import Button from "./Button";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
     const newLimit = (pageNumber + 1) * 10;
     setLimit(newLimit)
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button 
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
};

export default ShowMore;

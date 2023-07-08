import { MouseEventHandler } from "react";

// interface specifies how a structures should look like. what variables and values it should have 
export interface ButtonProps {
  title: string,
  containerStyles?: string,
  textStyles?: string,
  handleClick?:MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "reset";
  rightIcon?: string,
  isDisabled?: boolean,
}

export interface OptionProps{
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer : string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinder: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}


export interface filterProps {
  model: string;
  manufacturer: string;
  year: number;
  fuel_type: string;
  limit: number;
}

export interface ShowMoreProps{
  pageNumber: number;
  isNext: boolean;
}
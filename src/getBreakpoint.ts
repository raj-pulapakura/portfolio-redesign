import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config"; // Fix the path

const fullConfig = resolveConfig(tailwindConfig);

type breakpointType = "sm" | "md" | "lg" | "xl" | "2xl";

export const getBreakpointValue = (value: breakpointType): number =>
  +fullConfig.theme.screens[value].slice(
    0,
    fullConfig.theme.screens[value].indexOf("px")
  );

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint: string = "sm";
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint as breakpointType);
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};

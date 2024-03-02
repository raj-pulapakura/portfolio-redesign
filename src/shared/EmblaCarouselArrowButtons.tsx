import React, { useCallback, useEffect, useState } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { EmblaCarouselType } from "embla-carousel";
import IconButton from "./IconButton";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export function PrevButton({
  className,
  ...props
}: Parameters<typeof IconButton>[0]) {
  return (
    <IconButton
      style={{ boxShadow: "8px 8px 12px 0 rgba(0, 0, 0, 0.3)" }}
      className={`p-2 w-8 h-8  ${className}`}
      icon={faChevronLeft}
      {...props}
    />
  );
}

export function NextButton({
  className,
  ...props
}: Parameters<typeof IconButton>[0]) {
  return (
    <IconButton
      style={{ boxShadow: "8px 8px 12px 0 rgba(0, 0, 0, 0.3)" }}
      className={`p-2 w-8 h-8 ${className}`}
      icon={faChevronRight}
      {...props}
    />
  );
}

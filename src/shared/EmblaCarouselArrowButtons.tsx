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
}: JSX.IntrinsicElements["div"]) {
  return (
    <div
      style={{ boxShadow: "8px 8px 12px 0 rgba(0, 0, 0, 0.3)" }}
      className={`${className} bg-white aspect-square rounded-full p-2`}
      {...props}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="2x" />
    </div>
  );
}

export function NextButton({
  className,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return (
    <div
      style={{ boxShadow: "8px 8px 12px 0 rgba(0, 0, 0, 0.3)" }}
      className={`${className} bg-white aspect-square rounded-full p-2`}
      {...props}
    >
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
  );
}

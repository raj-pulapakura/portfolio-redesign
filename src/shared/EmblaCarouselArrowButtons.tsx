import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

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

type ArrowButtonProps = Omit<FontAwesomeIconProps, "icon"> & {
  disabled?: boolean;
};

export function PrevButton({ disabled, ...props }: ArrowButtonProps) {
  return disabled === undefined ? (
    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" {...props} />
  ) : disabled ? (
    <FontAwesomeIcon
      icon={faArrowCircleLeft}
      size="2x"
      {...props}
      color="rgb(50, 50, 50)"
    />
  ) : (
    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" {...props} />
  );
}

export function NextButton({ disabled, ...props }: ArrowButtonProps) {
  return disabled === undefined ? (
    <FontAwesomeIcon icon={faArrowCircleRight} size="2x" {...props} />
  ) : disabled ? (
    <FontAwesomeIcon
      icon={faArrowCircleRight}
      size="2x"
      {...props}
      color="rgb(50, 50, 50)"
    />
  ) : (
    <FontAwesomeIcon icon={faArrowCircleRight} size="2x" {...props} />
  );
}

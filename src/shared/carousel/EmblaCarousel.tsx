"use client";

import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export type EmblaCarouselProps = JSX.IntrinsicElements["section"] & {
  children?: ReactNode;
};

export default function EmblaCarousel({
  children,
  className,
  ...props
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={`relative ${className}`} {...props}>
      <div className="z-20 overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">{children}</div>
      </div>
      {!prevBtnDisabled && (
        <PrevButton
          className="z-50 absolute top-1/2 -left-3 md:-left-5 lg:-left-7 xl:-left-9 2xl:-left-11 -translate-y-1/2"
          onClick={onPrevButtonClick}
        />
      )}
      {!nextBtnDisabled && (
        <NextButton
          className="z-50 absolute top-1/2 -right-3 md:-right-5 lg:-right-7 xl:-right-9 2xl:-right-11 -translate-y-1/2"
          onClick={onNextButtonClick}
        />
      )}
    </section>
  );
}

"use client";

import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export type EmblaCarouselProps = {
  showArrowButtons?: boolean;
  showDotButtons?: boolean;
  children?: ReactNode;
};

export default function EmblaCarousel({
  showArrowButtons = true,
  showDotButtons = true,
  children,
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative ">
      <div className="z-20 overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">{children}</div>
      </div>
      {!prevBtnDisabled && (
        <PrevButton
          className="z-50 absolute top-1/2 left-2 -translate-y-1/2"
          onClick={onPrevButtonClick}
        />
      )}
      {!nextBtnDisabled && (
        <NextButton
          className="z-50 absolute top-1/2 right-2 -translate-y-1/2"
          onClick={onNextButtonClick}
        />
      )}
    </section>
  );
}

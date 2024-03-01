"use client";

import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export default function EmblaCarousel({ children }: { children?: ReactNode }) {
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
    <section>
      <div className="mx-4 mb-3 flex justify-between items-center">
        <div className="flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex gap-1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={index === selectedIndex}
            />
          ))}
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">{children}</div>
      </div>
    </section>
  );
}

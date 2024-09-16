'use client';

import { ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';

export type EmblaCarouselProps = JSX.IntrinsicElements['section'] & {
  children?: ReactNode;
  buttonClassName?: string;
};

export default function EmblaCarousel({
  children,
  className,
  buttonClassName,
  ...props
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={`relative ${className}`} {...props}>
      {!prevBtnDisabled && (
        <PrevButton
          className={`z-50 absolute top-1/2 -translate-x-[calc(100%+20px)] -translate-y-1/2 ${buttonClassName}`}
          onClick={onPrevButtonClick}
        />
      )}

      <div className="z-20 overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">{children}</div>
      </div>

      {!nextBtnDisabled && (
        <NextButton
          className={`z-50 absolute top-1/2 right-0 translate-x-[calc(100%+20px)] -translate-y-1/2 ${buttonClassName}`}
          onClick={onNextButtonClick}
        />
      )}
    </section>
  );
}

import { useCallback, useEffect, useState } from 'react';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { EmblaCarouselType } from 'embla-carousel';
import IconButton from '../buttons/IconButton';

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
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
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
      className={`p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 hover:cursor-pointer border-none shadow-2xl text-blue-900 ${className}`}
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
      className={`p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 hover:cursor-pointer border-none shadow-2xl text-blue-900 ${className}`}
      icon={faChevronRight}
      {...props}
    />
  );
}

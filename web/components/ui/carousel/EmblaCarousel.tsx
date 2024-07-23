import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import '@/styles/carousel.css'
import Image, { StaticImageData } from "next/image";

type PropType = {
  slides: StaticImageData[],
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [currentSlide, setCurrentSlide] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const handleSlideClickPlus = () => {
    setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
  }

  const handleSlideClickMinus = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1)
  }
  
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          {slides && slides.length > 0 && 
            (
              <div
                key={currentSlide}
                className="flex flex-col items-center justify-center"
              >
                <p>
                  {currentSlide + 1} / {slides.length}
                </p>
                <div className="item-top">
                    <Image
                      // src={Audemar}
                      src={slides[currentSlide]}
                      alt="wireframe"
                      className="item-top-img"
                    />
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={handleSlideClickMinus} />
          <NextButton onClick={handleSlideClickPlus} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_: any, index: any) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
              style={{
                color: 'green'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

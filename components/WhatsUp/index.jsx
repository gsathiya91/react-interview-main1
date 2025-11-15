import Slider from "react-slick";
import Button from "../Button";
import React, { useEffect, useRef } from 'react';

export default function WhatsUp({ data }) {
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <button aria-label="dots">
        <span></span>
      </button>
    ),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    beforeChange: (current, next) => {
      setTimeout(() => {
        manageFocus(sliderRef.current.innerSlider);
      }, 0);
    },
    afterChange: () => {
      manageFocus(sliderRef.current.innerSlider);
    }
  };

  useEffect(() => {
    manageFocus(sliderRef.current.innerSlider);
  }, [data]);

  const manageFocus = (slider) => {
    if (!slider) return;
    const slides = slider.list.querySelectorAll('.slick-slide');

    slides.forEach(slide => {
      const isHidden = slide.getAttribute('aria-hidden') === 'true';
      const focusableElements = slide.querySelectorAll('a, button, input, [tabindex]');
      focusableElements.forEach(element => {
        element.setAttribute('tabindex', isHidden ? '-1' : '0');
      });
    });
  };

  return (
    <>
      <div className="h-[200px] bg-[rgba(0,0,50,0.1)] gray-bg"></div>
      <section className="whats-section">
        <div className="container mx-auto px-4 main-wrapper" >
          <h2 className="main-title">{data?.heading} </h2>
          <Slider ref={sliderRef} {...settings}>
            {data?.card?.map((items, i) => {
              return (
                <>
                  <div className={`card card-${i}`} key={i} style={{
                    backgroundImage: `url(${items?.bgImage ? items?.bgImage : "no-bg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                    backgroundColor: `${items?.bgColor ? items?.bgColor : "transparent"}`
                  }} >
                    <div >
                      {items?.heading1 && (
                        <h2 className="heading1 h1">{items?.heading1}</h2>
                      )}
                      {items?.heading2 && (
                        <h2 className="h1">{items?.heading2}</h2>
                      )}
                      {items?.heading && <h2 className="h1">{items?.heading}</h2>}
                      {items?.image && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: items?.image,
                          }}
                        />
                      )}
                    </div>

                    {items?.description && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: items?.description,
                        }}
                      />
                    )}

                    <Button
                      buttonName={items?.buttonName}
                      buttonLink={items?.link}
                      gtmLinkContext="Whats Up"
                      openinNewWindow={items?.openinNewWindow ? items?.openinNewWindow : ""}
                    />
                  </div>
                </>

              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

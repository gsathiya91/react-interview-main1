import * as React from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const TwoColSection = ({
  data,
  className,
  backgroundColor,
  cardBackgroundColor,
  mdGrid,
  fullWidth,
  id
}) => {
  const [state, setState] = useState({ isOpen: false });

  const handleShowDialog = () => {
    setState({ isOpen: !state.isOpen });
  };
  const { ref: imageRef, inView: imageIsVisible } = useInView();
  // fintechforschools slider setting
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  // fintechforschools slider setting end

  const handleScriptLoad = () => {
    var exampleCallback = function () {
      // console.log('Order complete!');
    };

    if (window.EBWidgets) {
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '914510584777',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-914510584777',
        onOrderComplete: exampleCallback,
      });
    } else {
      console.error('EBWidgets is not defined');
    }
  };

  return (
    <section
      className={`two-column-section ${className ? className : ""} `}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
      }}
      id={id ? id : ""}
    >
      <div className={`${fullWidth ? "" : "container mx-auto px-4"} details`}>
        {data &&
          data?.map((data, i) => {
            return (
              <div key={i} className={`grid grid-cols-12 gap-5 main-wrapper`}>
                <div
                  className={`${mdGrid ? "md:col-span-6 " : "lg:col-span-6 "
                    } col-span-12 flex flex-col image-wrapper 
                ${data?.textAlign ? data?.textAlign : "text-center"}
                 ${data?.display == "right" ? "order-2" : ""}`}
                >
                  {data?.imageTitle && (
                    <p>
                      <strong>{data?.imageTitle}</strong>
                    </p>
                  )}

                  {data?.image && (
                    <div className="image-div">
                      <div
                        ref={imageRef}
                        className={`${imageIsVisible ? "move-animation" : ""}`}
                      >
                        <Image
                          src={
                            data?.image?.src ? data?.image?.src : data?.image
                          }
                          alt="Innovate Finance"
                          width={data?.imageWidth ? data?.imageWidth : "100%"}
                          height={
                            data?.imageHeight ? data?.imageHeight : "100%"
                          }
                          title={data?.imageTooltip ? data?.imageTooltip : ""}

                        />
                      </div>
                    </div>
                  )}
                  {data?.mainTitle && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.mainTitle,
                      }}
                    />
                  )}
                  {data?.description && (
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: data?.description,
                      }}
                    />
                  )}
                  {/* all iframe */}

                  {data?.embed && (
                    <div
                      className="vedio"
                      dangerouslySetInnerHTML={{
                        __html: data?.embed,
                      }}
                    />
                  )}
                  {/* iframe end */}
                  {data?.card && (
                    <CardInTwoCol
                      className={className}
                      data={data?.card}
                      backgroundColor={
                        cardBackgroundColor ? `${cardBackgroundColor}` : " "
                      }
                    />
                  )}
                  {data?.sliderItem && (
                    <SliderInTwoCol data={data} settings={settings} />
                  )}
                </div>
                <div
                  className={`content-wrapper ${mdGrid ? "md:col-span-6 " : "lg:col-span-6 "
                    } col-span-12 flex flex-col  ${data?.display == "right" ? "order-1" : ""
                    }`}
                >
                  {data?.titleImage && (
                    <div className="title-image">
                      <Image
                        src={data?.titleImage}
                        alt={data?.titleAlt ? data?.titleAlt : "Innovate Finance"}
                        width={
                          data?.titleImageWidth ? data?.titleImageWidth : "100%"
                        }
                        height={
                          data?.titleImageHeight
                            ? data?.titleImageHeight
                            : "100%"
                        }
                      />
                    </div>
                  )}
                  {/* uk-fintech-week--page */}
                  {data?.logo && (
                    <div className="logo-div">
                      <Link href={data?.ukLink}>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Image"
                          gtmlinkname="Image"
                          gtmlinkcontext="Two Col Section"
                        >
                          <Image
                            src={data?.ukImage}
                            alt="Innovate Finance"
                            width="272px"
                            height="116.91px"
                          />
                        </a>
                      </Link>
                    </div>
                  )}
                  {/* uk-fintech-week--page-end */}
                  {data?.title && (
                    <div
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: data?.title,
                      }}
                    />
                  )}
                  {data?.arrayofp &&
                    data?.arrayofp.map((items, i) => {
                      return (
                        <div
                          key={i}
                          className="paragraph"
                          dangerouslySetInnerHTML={{
                            __html: items?.ptag,
                          }}
                        />
                      );
                    })}
                  {data?.list && (
                    <ul>
                      {data?.list.map((item, i) => {
                        return (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{
                              __html: item?.item,
                            }}
                          />
                        );
                      })}
                    </ul>
                  )}
                  {data?.logoImages && (
                    <div className="logo-images">
                      <Image
                        src={data?.logoImages}
                        alt="Innovate Finance"
                        title={data?.imgTitle ? data?.imgTitle : ""}
                        width={data?.logoWidth ? data?.logoWidth : "100%"}
                        height={data?.logoHeight ? data?.logoHeight : "100%"}
                      />
                    </div>
                  )}
                  {data?.buttons && (
                    <div className={`lg:flex  buttons gap-3`}>
                      {/* <div className={`md:flex  buttons gap-3`}> */}
                      {data?.buttons?.map((button, i) => {
                        return (
                          <div
                            key={i}
                          // onClick={
                          //   button?.id ==
                          //     "eventbrite-widget-modal-trigger-637358866527"
                          //     ? () => handleShowDialog()
                          //     : ""
                          // }
                          >
                            {/* <div key={i}> */}
                            {button?.buttonName && (
                              <Button
                                buttonLink={button?.buttonLink}
                                buttonName={button?.buttonName}
                                id={button?.id ? button?.id : ""}
                                textAlign={
                                  button?.buttonAlign
                                    ? button?.buttonAlign
                                    : "md:text-left text-center"
                                }
                                openinNewWindow={button?.openinNewWindow ? button?.openinNewWindow : ""}
                                width={button?.buttonWidth ? button?.buttonWidth : ""}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* borderbutton */}
                  {data?.fintechschoolbtn &&
                    data?.fintechschoolbtn?.map((items, i) => {
                      return (
                        <div className="fintechschool-btn" key={i}>
                          <Link href={items?.fintechButtonLink}>
                            {items?.openInNewWindow == true ? (
                              <a
                                aria-label={items?.fintechButtonName}
                                gtmlinkname={items?.fintechButtonName}
                                gtmlinkcontext="Two Col Section"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span>{items?.fintechButtonName}</span>
                              </a>
                            ) : (
                              <a
                                aria-label={items?.fintechButtonName}
                                gtmlinkname={items?.fintechButtonName}
                                gtmlinkcontext="Two Col Section"
                              >
                                <span>{items?.fintechButtonName}</span>
                              </a>
                            )}
                          </Link>
                        </div>
                      );
                    })}
                  {/* bgGreenButton */}
                  {data?.buttonName && (
                    <Button
                      buttonLink={data?.buttonLink}
                      buttonName={data?.buttonName}
                      gtmLinkContext="Two COl Section"
                      textAlign={data?.buttonAlign ? data?.buttonAlign : "text-left"}
                      openinNewWindow={data?.openinNewWindow ? data?.openinNewWindow : ""}
                      width={data?.buttonWidth ? data?.buttonWidth : ""}
                    />
                  )}
                  {/* uk-fintech-week-button-end*/}
                </div>
              </div>

            );
          })}
      </div>
    </section>
  );
};

export default TwoColSection;

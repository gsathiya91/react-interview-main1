import * as React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Button from "../Button";
import Script from "next/script";

const ForceForGoodTwoCol = ({ data, className, backgroundColor, id }) => {
  return (
    <section
      className={`force-for-good-two-col ${className ? className : ""}`}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "",
      }}
      id={id ? id : ""}
    >
      <div className="container mx-auto px-4">
        {data &&
          data?.map((data, i) => {
            return (
              <div key={i} className={`grid grid-cols-12 gap-5 main-wrapper`}>
                <div
                  className={`md:col-span-6 col-span-12                
                 ${data?.display == "right" ? "order-2" : ""}`}
                >
                  {data?.image && (
                    <div className="image-wrapper">
                      <ParallaxProvider>
                        <Parallax className="parallax" speed={10}>
                          <Image
                            src={
                              data?.image?.src ? data?.image?.src : data?.image
                            }
                            alt="Innovate Finance"
                            width={data?.imageWidth ? data?.imageWidth : "100%"}
                            height={
                              data?.imageHeight ? data?.imageHeight : "100%"
                            }
                          />
                        </Parallax>
                      </ParallaxProvider>
                    </div>
                  )}
                  <div className="video-wrapper">
                    {data?.video && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.video,
                        }}
                      />
                    )}
                    {data?.logo && (
                      <div className="logo-overlay">
                        <Image
                          src={data?.logo}
                          alt={"Innovate Finance"}
                          width={
                            data?.logoWidth ? data?.logoWidth : "100%"
                          }
                          height={
                            data?.logoHeight
                              ? data?.logoHeight
                              : "100%"
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={`content-wrapper 
                     md:col-span-6 col-span-12 flex flex-col  ${data?.display == "right" ? "order-1" : ""
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
                        <div key={i}>
                          <div
                            className="paragraph"
                            dangerouslySetInnerHTML={{
                              __html: items?.ptag,
                            }}
                          />
                        </div>
                      );
                    })}

                  {data?.list && (
                    <ul>
                      {data?.list?.map((items, i) => {
                        return <li key={i}>{items?.items}</li>;
                      })}
                    </ul>
                  )}

                  {data?.buttons && (
                    <div className={`lg:flex  buttons gap-3`}>
                      {/* <div className={`md:flex  buttons gap-3`}> */}
                      {data?.buttons?.map((button, i) => {
                        return (
                          <React.Fragment key={i}>
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
                              />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  )}

                  {data?.additionallink && (
                    <div
                      className="paragraph mt-4"
                      dangerouslySetInnerHTML={{
                        __html: data?.additionallink,
                      }}
                    />
                  )}

                  <Script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />

                  <Script id="modal">
                    {`var exampleCallback = function () {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '914510584777',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-914510584777',
        onOrderComplete: exampleCallback,
    });`}
                  </Script>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ForceForGoodTwoCol;

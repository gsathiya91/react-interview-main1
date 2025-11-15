import * as React from "react";
import { useState, useEffect } from "react";
import Button from "../Button";
import Image from "next/image";
import FintechReviewPopup from "../FintechReviewPopup";

const TechZero = ({ data, className, videoPopUpData }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupLoader, setPopupLoader] = useState(false);
  const handleShowDialog = () => {
    setPopupLoader(true);
    setPopupOpen(!popupOpen);
    setTimeout(() => {
      setPopupLoader(false);
    }, 500);
  };

  // For prevent popup scroll
  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [popupOpen]);

  return (
    <section className={`tech-zero ${className ? className : ""}`}>
      <div className="container mx-auto px-4">
        <div
          className="tech-zero-wrapper grid grid-cols-12 gap-5 justify-items-stretch"
          style={{
            backgroundSize: "cover",
            minHeight: data?.bgMinHeight ? data?.bgMinHeight : "420px",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            // background: data?.background ? data?.background : "transparent",
            backgroundImage: `url(${data?.backgroundImage?.src
              ? data?.backgroundImage?.src
              : data?.backgroundImage
                ? data?.backgroundImage
                : "no-bg"
              })`,

          }}

        >
          <div className="md:flex md:col-span-8 col-span-12 gap-5 wrapper">
            {data?.image && (
              <div className="image-wrapper">
                <Image
                  className="mk-sticky-logo"
                  width="100px"
                  height="100px"
                  title="Tech Zero"
                  src={data?.image}
                  alt="Tech Zero"
                />
              </div>
            )}

            <div>
              {data?.title && (
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: data?.title,
                  }}
                />
              )}
              {/*only in fintech-review */}
              {data?.description1 && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: data?.description1,
                  }}
                />
              )}
              {/* fintech-review-end */}
            </div>
            {data?.description && (
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: data?.description,
                }}
              />
            )}
          </div>
          <div className="md:col-span-4 col-span-12 relative">
            <>
              {data?.buttonName && (
                <div>
                  {data?.buttonName && (
                    <Button
                      buttonLink={data?.buttonLink}
                      buttonName={data?.buttonName}
                      gtmLinkContext="Tech Zero"
                      width="w-full"
                      textAlign={
                        data?.buttonAlign ? data?.buttonAlign : "text-center"
                      }
                    />
                  )}
                </div>
              )}
              {data?.bgImage && videoPopUpData && (
                <div
                  className="wrapper"
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: data?.bgMinHeight
                      ? data?.bgMinHeight
                      : "194.98px",
                    backgroundImage: `url(${data?.bgImage ? data?.bgImage : "no-bg"
                      })`,
                  }}
                  role="img"
                  aria-label="Background Image"
                >
                  {data?.iframeImage && (
                    <Image
                      src={data?.iframeImage}
                      alt="Innovate Finance"
                      width="700%"
                      height="350%"
                    />
                  )}

                  <div className="icon-wrapper">
                    <svg
                      // style={{
                      //   fill: "rgb(255, 255, 255)",
                      //   height: "32px",
                      //   width: "25.1375px",
                      // }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1408 1792"
                      onClick={() => handleShowDialog()}
                    >
                      <path d="M1384 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"></path>
                    </svg>
                  </div>
                  <div className="video-image-overlay"></div>
                </div>
              )}
            </>
          </div>
        </div>
        {popupOpen && videoPopUpData && (
          <FintechReviewPopup
            data={videoPopUpData}
            handlevideoclose={handleShowDialog}
            popupLoader={popupLoader}
          />
        )}
      </div>
    </section >
  );
};

export default TechZero;

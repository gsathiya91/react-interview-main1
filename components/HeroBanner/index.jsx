import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import * as React from "react";
import BorderButton from "../BorderButton";

const HeroBanner = ({ data, className, id }) => {
  return (
    <section
      className={`herobanner flex flex-col justify-center text-center ${className ? className : ""
        }`}
      id={id ? id : ""}
      style={{
        backgroundSize: "cover",
        minHeight: data?.bgMinHeight ? data?.bgMinHeight : "420px",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        // background: data?.background ? data?.background : "transparent",
        backgroundImage: `url(${data?.bgImage?.src
          ? data?.bgImage?.src
          : data?.bgImage
            ? data?.bgImage
            : "no-bg"
          })`,
      }}
      role="img"
      aria-label="Background image"
    >
      <div className="container mx-auto px-4 main">
        <div>
          {data?.image && (
            <div className="image-wrapper">
              {data?.image && (
                <Image
                  priority
                  src={data?.image}
                  alt={data?.alt ? data?.alt : "Innovate Finance"}
                  width={data?.imageWidth ? data?.imageWidth : "100%"}
                  height={data?.imageHeight ? data?.imageHeight : "100%"}
                />
              )}
              {data?.tpwgImage && (
                <Image
                  priority
                  src={data?.tpwgImage}
                  alt={data?.alt ? data?.alt : "Innovate Finance"}
                  width={data?.tpwgImageWidth ? data?.tpwgImageWidth : "100%"}
                  height={
                    data?.tpwgImageHeight ? data?.tpwgImageHeight : "100%"
                  }
                />
              )}
              {data?.buttonTitle && data?.buttonLink && (
                <div className="btn-innovation">
                  <Link href={data?.buttonLink}>
                    <a
                      aria-label={data?.buttonTitle}
                      gtmlinkname={data?.buttonTitle}
                      gtmlinkcontext="Hero Banner"
                    >
                      {data?.buttonTitle}
                    </a>
                  </Link>
                </div>
              )}
            </div>
          )}
          {/*powerlist judge page start*/}
          {data?.powerlistData &&
            data?.powerlistData?.map((item, i) => {
              return (
                <div className="md:flex" key={i}>
                  <div className="powerlist-hero-image">
                    {item?.powerlistImageLink ? (
                      <Link href={item?.powerlistImageLink}>
                        <a
                          aria-label={item?.ariaLabelName}
                          gtmlinkname={item?.ariaLabelName}
                          gtmlinkcontext="Hero Banner"
                        >
                          {item?.powerlistImage && (
                            <Image
                              priority
                              src={item?.powerlistImage}
                              alt="Innovate Finance"
                              width={item?.imageWidth}
                              height={item?.imageHeight}
                            />
                          )}
                        </a>
                      </Link>
                    ) : (
                      <>
                        {item?.powerlistImage && (
                          <Image
                            priority
                            src={item?.powerlistImage}
                            alt="Innovate Finance"
                            width={item?.imageWidth}
                            height={item?.imageHeight}
                          />
                        )}
                      </>
                    )}
                  </div>
                  <div>
                    {item?.title && (
                      <div
                        className="herobanner-title"
                        dangerouslySetInnerHTML={{
                          __html: item?.title,
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          {/*powerlist judge page end*/}
        </div>
        <div className="herobanner-details">
          {data?.title && (
            <div
              className="herobanner-title"
              dangerouslySetInnerHTML={{
                __html: data?.title,
              }}
            />
          )}
          {data?.description && (
            <div
              className="herobanner-description"
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            />
          )}
        </div>
        {data?.descriptions &&
          data?.descriptions?.map((item, i) => {
            return (
              <div
                key={i}
                className="description"
                dangerouslySetInnerHTML={{
                  __html: item?.data,
                }}
              />
            );
          })}
        {data?.buttonName && data?.buttonLink && (
          <Button
            gtmLinkContext="Hero Banner"
            buttonLink={data?.buttonLink}
            buttonName={data?.buttonName}
            textAlign={data?.buttonAlign ? data?.buttonAlign : "text-left"}
            openinNewWindow={data?.openinNewWindow ? data?.openinNewWindow : ""}
            previewArrow={data?.previewArrow == true ? true : false}
          />
        )}
        {/* borderbutton  */}
        <BorderButton
          data={data}
          className={className}
          gtmLinkContext="Hero Banner"
        />

        {data?.openinNewWindow == true ? (
          <>
            {data?.capitalButtonLink && data?.capitalButton && (
              <Link href={data?.capitalButtonLink}>
                <a
                  aria-label={data?.capitalButton}
                  gtmlinkname={data?.capitalButton}
                  gtmlinkcontext="Hero Banner"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="capital-button">{data?.capitalButton}</div>
                </a>
              </Link>
            )}
          </>
        ) : (
          <>
            {data?.capitalButtonLink && data?.capitalButton && (
              <Link href={data?.capitalButtonLink}>
                <a
                  aria-label={data?.capitalButton}
                  gtmlinkname={data?.capitalButton}
                  gtmlinkcontext="Hero Banner"
                >
                  <div className="capital-button">{data?.capitalButton}</div>
                </a>
              </Link>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;

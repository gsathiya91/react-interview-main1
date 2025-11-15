import Link from "next/link";
import * as React from "react";
import Button from "../Button";
import { useInView } from "react-intersection-observer";
import "animate.css";
import Image from "next/image";
import { useState } from "react";

const Contentsection = ({ data, backgroundColor, className, id }) => {
  const { ref: imageRef, inView: contentIsVisible } = useInView();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000);
  };
  return (
    <>
      {data && (
        <section
          className={`content-section ${className ? className : ""}`}
          id={id ? id : ""}
          style={{
            background: backgroundColor ? backgroundColor : "transparent",
          }}
        >
          <div className="container mx-auto px-4 main-wrapper">
            {data?.map((items, index) => {
              return (
                <div key={index} className="content-details">
                  {items?.mainTitle && (
                    <div
                      className={`content-div ${contentIsVisible ? "animate-fade-in-left" : ""
                        }`}
                    >
                      <div
                        ref={imageRef}
                        className="main-title"
                        dangerouslySetInnerHTML={{
                          __html: items?.mainTitle,
                        }}
                      />
                    </div>
                  )}
                  {items?.title && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: items?.title,
                      }}
                    />
                  )}
                  {items?.content && (
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: items?.content,
                      }}
                    />
                  )}
                  {items?.privacyPolicyListData && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: items?.privacyPolicyListData,
                      }}
                    />
                  )}
                  <>
                    {/* about page */}
                    <div className="content-wrapper">
                      {items?.description &&
                        items?.description?.map((item, i) => {
                          return (
                            <div key={i}>
                              {item?.item && (
                                <p
                                  className="description"
                                  dangerouslySetInnerHTML={{
                                    __html: item?.item,
                                  }}
                                />
                              )}

                              {item?.list && (
                                <ul className="pb-3">
                                  {item?.list?.map((list, i) => {
                                    return (
                                      <li
                                        key={i}
                                        className="description"
                                        dangerouslySetInnerHTML={{
                                          __html: list?.item,
                                        }}
                                      />
                                    );
                                  })}
                                </ul>
                              )}
                              {item?.ptag && (
                                <div
                                  className="description"
                                  dangerouslySetInnerHTML={{
                                    __html: item?.ptag,
                                  }}
                                />
                              )}
                              {item.copyData && item.codeToCopy && (
                                <p><strong>{item.copyData}</strong>
                                  <span className="copy-code" onClick={() => handleCopyToClipboard(item.codeToCopy)} role="button"
                                    tabIndex="0">
                                    <strong> {item.codeToCopy} </strong>
                                    {showTooltip && <span className="tooltip">{item?.tooltip}</span>}</span>
                                </p>
                              )}
                              {/* wireddifferentlyseries only */}
                              {item?.subTitle &&
                                item?.subImageLink &&
                                item?.subImage && (
                                  <div className="flex items-center sub-wrapper">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item?.subTitle,
                                      }}
                                    />
                                    <div>
                                      <Link href={item?.subImageLink}>
                                        <a
                                          target="_blank"
                                          rel="noreferrer"
                                          aria-label="story works"
                                        >
                                          <Image
                                            alt="Innovate Finance"
                                            src={item?.subImage}
                                            width="90"
                                            height="44"
                                          />
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                )}
                              {/* wireddifferentlyseries only end*/}
                            </div>
                          );
                        })}
                      {/* ukfintechweek page */}
                      {items?.buttons && (
                        <div className="grid md:grid-cols-2 gap-5">
                          {items?.buttons &&
                            items?.buttons?.map((button, i) => {
                              return (
                                <div key={i}>
                                  {button?.buttonName && button?.buttonLink && (
                                    <Button
                                      buttonLink={button?.buttonLink}
                                      buttonName={button?.buttonName}
                                      gtmLinkContext="Content Section"
                                      width="w-full"
                                    />
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      )}
                      {items?.buttonOpeninNewWindow === true ? (
                        <>
                          {items?.singleButtonName &&
                            items?.singleButtonLink && (
                              <Button
                                buttonLink={items?.singleButtonLink}
                                buttonName={items?.singleButtonName}
                                gtmLinkContext="Content Section"
                                openinNewWindow={true}
                                buttonColor={items?.buttonBgColor ? items?.buttonBgColor : ""}
                                buttonTextColor={items?.buttonTextColor ? items?.buttonTextColor : ""}
                                width={items?.singleButtonWidth}
                                textAlign={
                                  items?.buttonTextAlign
                                    ? items?.buttonTextAlign
                                    : ""
                                }
                              />
                            )}
                        </>
                      ) : (
                        <>
                          {items?.singleButtonName &&
                            items?.singleButtonLink && (
                              <Button
                                buttonLink={items?.singleButtonLink}
                                buttonName={items?.singleButtonName}
                                gtmLinkContext="Content Section"
                                width={items?.singleButtonWidth}
                                buttonColor={items?.buttonBgColor ? items?.buttonBgColor : ""}
                                buttonTextColor={items?.buttonTextColor ? items?.buttonTextColor : ""}
                                textAlign={
                                  items?.buttonTextAlign
                                    ? items?.buttonTextAlign
                                    : ""
                                }
                              />
                            )}
                        </>
                      )}

                      {/* /innovationinfinance page start */}
                      {/* /london-technology-week-2018/ page start */}
                      {items?.openinNewwindow == true ? (
                        <>
                          {items?.buttonName && items?.buttonLink && (
                            <div className="button">
                              <Link href={items?.buttonLink}>
                                <a
                                  aria-label={items?.buttonName}
                                  gtmlinkname={items?.buttonName}
                                  gtmlinkcontext="Content Section"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: items?.buttonName,
                                    }}
                                  />
                                </a>
                              </Link>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {items?.buttonName && items?.buttonLink && (
                            <div className="button">
                              <Link href={items?.buttonLink}>
                                <a
                                  aria-label={items?.buttonName}
                                  gtmlinkname={items?.buttonName}
                                  gtmlinkcontext="Content Section"
                                >
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: items?.buttonName,
                                    }}
                                  />
                                  <i className="darker-background"></i>
                                </a>
                              </Link>
                            </div>
                          )}
                        </>
                      )}
                      {/* /london-technology-week-2018/ page end */}
                      {/* /innovationinfinance page end */}
                      {/* for sponsorsandexhibitors hidden buttons start */}
                      {items?.ukbuttons &&
                        // column display buttons
                        items?.ukbuttons?.map((items, i) => {
                          return (
                            <div key={i}>
                              {items?.buttonName && items?.buttonLink && (
                                <Button
                                  buttonLink={items?.buttonLink}
                                  buttonName={items?.buttonName}
                                  gtmLinkContext="Content Section"
                                  width={
                                    items?.buttonWidth ? items?.buttonWidth : ""
                                  }
                                  textAlign={
                                    items?.buttonTextAlign
                                      ? items?.buttonTextAlign
                                      : "text-center"
                                  }
                                  openinNewWindow={items?.openinNewWindow}
                                />
                              )}
                            </div>
                          );
                        })}
                      {/* for sponsorsandexhibitors hidden buttons end */}
                    </div>
                  </>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Contentsection;

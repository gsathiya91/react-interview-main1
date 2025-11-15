import * as React from "react";
import FiveButtons from "../FiveButtons";

const Sponsor = ({ data, className, id, openinnewWindow }) => {
  return (
    <section
      className={`sponsor-section ${className ? className : ""}`}
      id={id ? id : ""}
    >
      <div className="container mx-auto px-4 main">
        <div
          className="content"
          style={{
            backgroundImage: `url("${
              data?.backgroundImage ? data?.backgroundImage : ""
            }")`,
            padding: data?.bgPadding ? data?.bgPadding : "30px 20px",
            backgroundPosition: "center",
            background: `${data?.background ? data?.background : ""}`,
          }}
        >
          {data?.data?.map((data, i) => {
            return (
              <div key={i}>
                {data?.title && (
                  <div
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: data?.title,
                    }}
                  />
                )}
                {data?.subTitle && (
                  <div
                    className="sub-title"
                    dangerouslySetInnerHTML={{
                      __html: data?.subTitle,
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
                {data?.buttonName && (
                  <div
                    className={`button-wrapper ${
                      data?.buttonAlign == "right" ? "md:text-right " : ""
                    }`}
                  >
                    {openinnewWindow === true ? (
                      <a
                        className={`global-btn`}
                        style={{
                          backgroundColor: data?.buttonBgColor,
                          color: data?.buttonColor,
                        }}
                        href={data?.buttonLink}
                        aria-label={data?.buttonName}
                        gtmlinkname={data?.buttonName}
                        gtmlinkcontext="Sponsor"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="arrow-icon">
                          <svg
                            style={{ height: "16px", width: "16px" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill={"#fff"}
                          >
                            <path d="M310.627 438.627l160-160c12.497-12.496 12.497-32.758 0-45.255l-160-160c-12.497-12.496-32.758-12.496-45.255 0-12.497 12.497-12.497 32.758 0 45.255l105.373 105.373h-306.745c-17.673 0-32 14.327-32 32s14.327 32 32 32h306.745l-105.373 105.373c-6.248 6.248-9.372 14.438-9.372 22.627s3.124 16.379 9.372 22.627c12.497 12.497 32.758 12.497 45.255 0z"></path>
                          </svg>
                        </i>
                        <span> {data?.buttonName}</span>
                      </a>
                    ) : (
                      <a
                        className={`global-btn`}
                        style={{
                          backgroundColor: data?.buttonBgColor,
                          color: data?.buttonColor,
                        }}
                        href={data?.buttonLink}
                        aria-label={data?.buttonName}
                        gtmlinkname={data?.buttonName}
                        gtmlinkcontext="Sponsor"
                      >
                        <i className="arrow-icon">
                          <svg
                            style={{ height: "16px", width: "16px" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill={"#fff"}
                          >
                            <path d="M310.627 438.627l160-160c12.497-12.496 12.497-32.758 0-45.255l-160-160c-12.497-12.496-32.758-12.496-45.255 0-12.497 12.497-12.497 32.758 0 45.255l105.373 105.373h-306.745c-17.673 0-32 14.327-32 32s14.327 32 32 32h306.745l-105.373 105.373c-6.248 6.248-9.372 14.438-9.372 22.627s3.124 16.379 9.372 22.627c12.497 12.497 32.758 12.497 45.255 0z"></path>
                          </svg>
                        </i>
                        <span> {data?.buttonName}</span>
                      </a>
                    )}
                  </div>
                )}
                {data?.buttonData && (
                  <FiveButtons
                    data={data?.buttonData}
                    GridValue="grid-cols-1"
                    className={"womeninfintech-buttons"}
                    onContainer
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;

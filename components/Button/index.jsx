import Link from "next/link";
import * as React from "react";
const Button = props => {
  return (
    <>
      {props?.openinNewWindow == true ? (
        <div
          className={`${props?.textAlign ? props?.textAlign : "text-center"}`}
          id={`${props?.id ? props?.id : ""}`}
        >
          {props?.buttonLink && (
            <Link href={props?.buttonLink}>
              <a
                className={`global-btn ${props?.width ? props?.width : ""}`}
                target="_blank"
                rel="noreferrer"
                aria-label={props?.buttonName}
                gtmlinkname={props?.buttonName}
                gtmlinkcontext={props?.gtmLinkContext}
                style={{
                  backgroundColor: props?.buttonColor
                    ? props?.buttonColor
                    : "#4bbb87",
                  color: props?.buttonTextColor
                    ? props?.buttonTextColor
                    : "#fff",
                }}
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
                <span>{props?.buttonName}</span>
              </a>
            </Link>
          )}
        </div>
      ) : (
        <div
          className={` ${props?.textAlign ? props?.textAlign : "text-center"}`}
          id={`${props?.id ? props?.id : ""}`}
        >
          {props?.buttonLink && (
            <Link href={props?.buttonLink}>
              <a
                className={`global-btn ${props?.width ? props?.width : ""}`}
                style={{
                  backgroundColor: props?.buttonColor
                    ? props?.buttonColor
                    : "#4bbb87",
                  color: props?.buttonTextColor
                    ? props?.buttonTextColor
                    : "#fff",
                }}
                aria-label={props?.buttonName}
                gtmlinkname={props?.buttonName}
                gtmlinkcontext={props?.gtmLinkContext}
              >
                <i className="arrow-icon">
                  {props?.previewArrow == true ? (
                    <>
                      <svg
                        style={{ height: "16px", width: "16px" }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 1792"
                        fill={"#fff"}
                      >
                        <path d="M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"></path>
                      </svg>
                    </>
                  ) : (
                    <svg
                      style={{ height: "16px", width: "16px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill={"#fff"}
                    >
                      <path d="M310.627 438.627l160-160c12.497-12.496 12.497-32.758 0-45.255l-160-160c-12.497-12.496-32.758-12.496-45.255 0-12.497 12.497-12.497 32.758 0 45.255l105.373 105.373h-306.745c-17.673 0-32 14.327-32 32s14.327 32 32 32h306.745l-105.373 105.373c-6.248 6.248-9.372 14.438-9.372 22.627s3.124 16.379 9.372 22.627c12.497 12.497 32.758 12.497 45.255 0z"></path>
                    </svg>
                  )}
                </i>
                <span id={props?.id}>{props?.buttonName}</span>
              </a>
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Button;

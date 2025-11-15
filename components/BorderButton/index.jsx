import * as React from "react";
import Link from "next/link";

const BorderButton = ({ data, className, gtmLinkContext }) => {
  return (
    <>
      {data?.borderButtonLink && data?.borderButtonName && (
        <div className={`border-button-wrapper ${className ? className : ""}`}>
          <div className="border-button">
            <Link href={data?.borderButtonLink}>
              <a
                aria-label={data?.borderButtonName}
                gtmlinkname={data?.borderButtonName}
                gtmlinkcontext={gtmLinkContext}
              >
                {data?.borderButtonName}
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BorderButton;

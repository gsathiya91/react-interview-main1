import * as React from "react";
const Spacer = ({ height, backgroundColor, mobileHeight, ipadHeight }) => {
  return (
    <section
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
      }}
    >
      <div className="container mx-auto px-4">
        {mobileHeight ? (
          <>
            <div className="hidden md:block lg:hidden">
              <div style={{ height: ipadHeight ? ipadHeight : height }}></div>
            </div>
            <div className="md:hidden block">
              <div
                style={{ height: mobileHeight ? mobileHeight : height }}
              ></div>
            </div>
            <div className="hidden lg:block">
              <div style={{ height: height ? height : "" }}></div>
            </div>
          </>
        ) : (
          <div>
            <div style={{ height: height ? height : "" }}></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Spacer;

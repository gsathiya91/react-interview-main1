import * as React from "react";
import Button from "../Button";

const FiveButtons = ({ data, GridValue, className, onContainer }) => {
  return (
    <section className={`five-button-section ${className ? className : ""}`}>
      <div className={`${onContainer ? "" : "container mx-auto px-4"}`}>
        <div
          className={
            GridValue
              ? `grid ${GridValue} md:gap-6 details`
              : "md:grid md:grid-cols-5 gap-8 secure-btn"
          }
        >
          {data?.map((data, i) => {
            return (
              <div className="wrapper-buttons" key={i}>
                <Button
                  buttonColor={data?.buttonColor}
                  buttonLink={data?.buttonLink}
                  buttonName={data?.buttonName}
                  gtmLinkContext="Five Buttons"
                  width="w-full"
                  id={data?.id ? data?.id : ""}
                  openinNewWindow={data?.openinNewWindow ? data?.openinNewWindow : ""}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FiveButtons;

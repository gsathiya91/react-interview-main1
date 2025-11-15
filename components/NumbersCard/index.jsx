import * as React from "react";

const NumbersCard = ({ data, className, backgroundColor }) => {
  return (
    <section
      className={`number-card ${className ? className : ""}`}
      style={{
        background: backgroundColor ? backgroundColor : "transparent",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="number-wrapper">
          {data?.title && (
            <div
              className="title"
              dangerouslySetInnerHTML={{
                __html: data?.title,
              }}
            />
          )}
        </div>
        <div
          className={`card-grid grid ${
            data?.gridCols == "3"
              ? "md:grid-cols-3 grid-cols-2 gap-5"
              : "md:grid-cols-3 grid-cols-1 gap-5"
          }`}
        >
          {data?.numberCard &&
            data?.numberCard?.map((item, i) => {
              return (
                <div className="card-content" key={i}>
                  {item?.number && (
                    <div
                      className="sub-title"
                      dangerouslySetInnerHTML={{
                        __html: item?.number,
                      }}
                    />
                  )}
                  {item?.linearGradient && (
                    <div
                      className="linear-gradient"
                      style={{
                        height: item?.height ? item?.height : "2px",
                        background: item?.linearGradient,
                      }}
                    />
                  )}
                  {item?.text && <p>{item?.text}</p>}
                </div>
              );
            })}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default NumbersCard;

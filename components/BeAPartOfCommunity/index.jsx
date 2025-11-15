import * as React from "react";
import "animate.css";

const BeAPartOfCommunity = ({ data, className }) => {
  return (
    <section className={`be-a-part-of-community ${className ? className : ""}`}>
      <div className="container mx-auto md:px-4">
        {data?.title && <h1 className="main-title">{data?.title}</h1>}

        <div
          className={`card-section ${
            data?.gridCol == 5
              ? "grid md:grid-cols-5 gap-5 justify-center text-center"
              : data?.gridCol == "5summer"
              ? "grid md:grid-cols-5 gap-5 text-center"
              : "grid lg:grid-cols-4 grid-cols-2 gap-5"
          }`}
          style={{
            background: data?.backgroundColor
              ? data?.backgroundColor
              : "transparent",
            padding: data?.padding ? data?.padding : "35px 50px 25px",
          }}
        >
          {data?.cardItems?.map((item, i) => {
            return (
              <div className="items animate__fadeIn" key={i}>
                {item?.number && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.number,
                    }}
                  />
                )}
                {item?.description && (
                  <p
                    style={{
                      color: data?.textColor ? data?.textColor : "#fff",
                    }}
                  >
                    {item?.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeAPartOfCommunity;

import * as React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "animate.css";
// import { useEffect } from "react";

const BecomeTwocolSection = ({ data, className }) => {
  const scroll = "1";
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
    onChange: inView => {
      if (inView) {
        scroll = "2";
      }
    },
  });

  return (
    <section
      className={`become-a-member-two-column-section ${className ? className : ""
        }`}
    >
      <div className="container mx-auto px-4">
        {data?.map((data, i) => {
          return (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-5 place-items-center main-wrapper`}
            >
              {data?.image && (
                <div
                  className={`image-div 
                   ${data?.display == "left"
                      ? `image-div-transition-top ${imageIsVisible && scroll == "1"
                        ? "transition-top"
                        : ""
                      } md:order-1`
                      : `image-div-transition-right ${imageIsVisible && scroll == "1"
                        ? "transition-right "
                        : ""
                      }`
                    } order-2`}
                >
                  <div ref={imageRef}>
                    <Image
                      src={data?.image}
                      alt={data?.title}
                      width={522}
                      height={508}
                    />
                  </div>
                </div>
              )}
              <div
                className={`content-wrapper  ${data?.display == "left" ? "md:order-2 " : ""
                  } order-1`}
              >
                {data?.title && <h3>{data?.title}</h3>}
                {data?.arrayofp &&
                  data?.arrayofp.map((items, i) => {
                    return (
                      <div
                        key={i}
                        className="paragraph"
                        dangerouslySetInnerHTML={{
                          __html: items?.ptag,
                        }}
                      />
                    );
                  })}

                {data?.list && (
                  <ul>
                    {data?.list.map((item, i) => {
                      return <li key={i}>{item?.item}</li>;
                    })}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BecomeTwocolSection;

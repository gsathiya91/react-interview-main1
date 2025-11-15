import * as React from "react";
import HubspotForm from "react-hubspot-form";

const UkFintechForm = ({
  data,
  className,
  backgroundColor,
  noContainer,
  id,
}) => {
  return (
    <section
      className={`ukfintech-form ${className ? className : ""}`}
      id={id ? id : ""}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
      }}
    >
      <div className={`${noContainer ? "" : "container mx-auto px-4"}`}>
        <div className="wrapper">
          <div>
            {data?.title && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.title,
                }}
              />
            )}
            {data?.ptag && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.ptag,
                }}
              />
            )}
            {data?.list && (
              <ul>
                {data?.list.map((item, i) => {
                  return (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: item?.item,
                      }}
                    />
                  );
                })}
              </ul>
            )}
          </div>
          {data?.id && data?.formId && (
            <HubspotForm
              // async
              portalId={data?.id}
              formId={data?.formId}
              onSubmit={() => console.log("Submit!")}
              onReady={form => console.log("Form ready!")}
              loading={
                <div
                  style={{
                    minHeight: data?.minHeight ? data?.minHeight : "",
                  }}
                ></div>
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default UkFintechForm;

import * as React from "react";
import { useState } from "react";
import Button from "../Button";

const BecomeTabSection = ({ data }) => {
  const [toggle, setToggle] = useState(1);
  const handleTab = i => {
    setToggle(i);
  };
  // select
  const [selected, setSelected] = useState(1);
  const handleChange = e => {
    setSelected(parseInt(e.target.value));
  };

  return (
    <section className="become-tab-section">
      <div className="container mx-auto px-4">
        <>
          <>
            <h2>{data?.title}</h2>
            {/* <div className="h-[45px]"></div> */}
          </>
          {/* desktop */}
          <ul className="md:flex gap-5 hidden md:block desktop-wrapper">
            {data?.tabs?.map((tab, i) => {
              return (
                <li
                  className={toggle === i + 1 ? "tab active-tab" : "tab"}
                  onClick={() => handleTab(i + 1)}
                  key={i}
                  role="button"
                  tabIndex="0"
                >
                  {tab?.tab}
                </li>
              );
            })}
          </ul>
          {/* desktop content */}
          <div className="hidden md:block tab-wrapper">
            {data?.contentTab?.map((tab, i) => {
              return (
                <div
                  key={i}
                  className={
                    toggle === i + 1
                      ? "content-tab active-content-tab"
                      : "content-tab"
                  }
                >
                  <div>
                    <h3>{tab?.title}</h3>
                    {tab?.description && (
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{
                          __html: tab?.description,
                        }}
                      />
                    )}
                    {tab?.buttonLink && (
                      <Button
                        buttonLink={tab?.buttonLink}
                        buttonName={tab?.buttonName}
                        gtmLinkContext="Become Tab Section"
                        width="w-full"
                      />
                    )}

                    <div className="become-tab-card-wrapper grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                      {tab?.cardData?.map?.((item, i) => {
                        return (
                          <div key={i}>
                            <div className="become-tab-card">
                              <div>
                                <h4>{item?.title}</h4>
                                {item?.description?.map((item, i) => {
                                  return (
                                    <div key={i}>
                                      {item?.ptag && (
                                        <p
                                          className="description"
                                          dangerouslySetInnerHTML={{
                                            __html: item?.ptag,
                                          }}
                                        />
                                      )}

                                      {item?.list && (
                                        <ul>
                                          {item?.list?.map((item, i) => {
                                            return (
                                              <li key={i} className="list-disc">
                                                {item?.item}
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                              <Button
                                buttonLink={item?.buttonLink}
                                buttonName={item?.buttonName}
                                gtmLinkContext="Become Tab Section"
                                width="w-full"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
            {data?.buttonName && (
              <Button
                buttonLink={data?.buttonLink}
                buttonName={data?.buttonName}
                gtmLinkContext="Become Tab Section"
                width="w-full"
              />
            )}
          </div>
          {/* desktop content end */}

          {/* mobile select*/}
          <select
            className="md:hidden block"
            value={selected}
            onChange={handleChange}
            aria-label={data?.title}
          >
            {data?.tabs?.map((tab, i) => {
              return (
                <option key={i} value={i + 1}>
                  {tab?.tab}
                </option>
              );
            })}
          </select>
          {/* mobile content */}
          <div className="md:hidden block">
            {data?.contentTab?.map((tab, i) => {
              return (
                <div
                  key={i}
                  className={
                    selected === i + 1
                      ? "content-tab active-content-tab"
                      : "content-tab"
                  }
                >
                  <div>
                    <h3>{tab?.title}</h3>
                    {tab?.description && (
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{
                          __html: tab?.description,
                        }}
                      />
                    )}
                    {tab?.buttonLink && (
                      <Button
                        buttonLink={tab?.buttonLink}
                        buttonName={tab?.buttonName}
                        gtmLinkContext="Become Tab Section"
                        width="w-full"
                      />
                    )}

                    <div className="become-tab-card-wrapper grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                      {tab?.cardData?.map?.((item, i) => {
                        return (
                          <div className="become-tab-card" key={i}>
                            <h4>{item?.title}</h4>
                            {item?.description?.map((item, i) => {
                              return (
                                <div key={i}>
                                  {item?.ptag && (
                                    <p
                                      className="description"
                                      dangerouslySetInnerHTML={{
                                        __html: item?.ptag,
                                      }}
                                    />
                                  )}

                                  {item?.list && (
                                    <ul>
                                      {item?.list?.map((item, i) => {
                                        return (
                                          <li key={i} className="list-disc">
                                            {item?.item}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  )}
                                </div>
                              );
                            })}
                            <Button
                              buttonLink={item?.buttonLink}
                              buttonName={item?.buttonName}
                              gtmLinkContext="Become Tab Section"
                              width="w-full"
                            />{" "}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
            {data?.buttonName && (
              <Button
                buttonLink={data?.buttonLink}
                buttonName={data?.buttonName}
                gtmLinkContext="Become Tab Section"
                width="w-full"
              />
            )}
          </div>
          {/* mobile content end*/}
        </>
      </div>
    </section>
  );
};

export default BecomeTabSection;

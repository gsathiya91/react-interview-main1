import * as React from "react";

const cardLoadingData1 = [
  {
    h2: "",
  },
];
const cardLoadingData2 = [
  {
    h2: "",
  },
  {
    h2: "",
  },
];
const cardLoadingData3 = [
  {
    h2: "",
  },
  {
    h2: "",
  },
  {
    h2: "",
  },
];
const cardLoadingData4 = [
  {
    h2: "",
  },
  {
    h2: "",
  },
  {
    h2: "",
  },
  {
    h2: "",
  },
];
const cardLoadingData5 = [
  {
    h2: "",
  },
  {
    h2: "",
  },
  {
    h2: "",
  },
  {
    h2: "",
  },
  {
    h2: "",
  },
];
const cardLoadingData6 = [
  {
    h2: "",
  },
  {
    h2: "",
  },
];
const CardLoading = ({ noOfCardsInRow, Grid, className }) => {
  return (
    <section className={`card-loading ${className ? className : ""} `}>
      <div className="container mx-auto px-4">
        {noOfCardsInRow == "No Image" ? (
          <div>
            {cardLoadingData6?.map((item, i) => {
              return (
                <div className="card is-loading" key={i}>
                  <div className="content">
                    <h2>{item?.h2}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        ) : noOfCardsInRow == "5" ? (
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  gap-5">
            {cardLoadingData5?.map((item, i) => {
              return (
                <div className="card is-loading" key={i}>
                  <div className="image"></div>
                  <div className="content">
                    <h2>{item?.h2}</h2>
                    <p></p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : noOfCardsInRow == "4" ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {cardLoadingData4?.map((item, i) => {
              return (
                <div className="card is-loading" key={i}>
                  <div className="image"></div>
                  <div className="content">
                    <h2>{item?.h2}</h2>
                    <p></p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : noOfCardsInRow == "3" ? (
          <div
            className={`${
              Grid ? Grid : "grid lg:grid-cols-3 md:grid-cols-2 gap-5"
            }`}
          >
            {cardLoadingData3?.map((item, i) => {
              return (
                <div className="card is-loading" key={i}>
                  <div className="image"></div>
                  <div className="content">
                    <h2>{item?.h2}</h2>
                    <p></p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : noOfCardsInRow == "2" ? (
          <div className="grid grid-cols-2 gap-5">
            {cardLoadingData2?.map((item, i) => {
              return (
                <div className="card is-loading" key={i}>
                  <div className="image"></div>
                  <div className="content">
                    <h2>{item?.h2}</h2>
                    <p></p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : noOfCardsInRow == "1" ? (
          <div>
            {cardLoadingData1?.map((item, i) => {
              return (
                <div className="card is-loading" key={i}>
                  <div className="image"></div>
                  <div className="content">
                    <h2>{item?.h2}</h2>
                    <p></p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default CardLoading;

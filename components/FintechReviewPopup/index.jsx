import Image from "next/image";
export default function FintechReviewPopup({
  data,
  handlevideoclose,
  className,
  popupLoader,
}) {
  return (
    <div
      className={`fintech-review-popup-section absolute ${className ? className : ""
        }`}
    >

      <div className="overlay">
        {popupLoader ? (
          <div
            className={`master-slider-popup-loader ${className ? className : ""}`}
          >
            <Image
              src="https://ww2.innovatefinance.com/wp-content/themes/jupiter/assets/images/fancybox/fancybox_loading.gif"
              alt="My GIF image"
              width={30}
              height={30}
            />
          </div>
        ) :
          <div className="container mx-auto px-4" style={{ height: "85%" }}>
            <div className="md:flex justify-between gap-5 content-wrapper">
              <div
                className="what-is-fintech-popup-content"
                style={{ width: "96%", margin: "0px auto", position: "relative" }}
              >
                <div className="icon" onClick={() => handlevideoclose()}>
                  {!popupLoader && data?.imageSrc && (
                    <Image
                      src={data?.imageSrc}
                      alt="close-icon"
                      width="25"
                      height="25"
                    />
                  )}
                </div>
                {!popupLoader && data?.iframe && (
                  <div
                    className="iframe-data"
                    style={{ height: "100%", width: "100%" }}
                    dangerouslySetInnerHTML={{
                      __html: data?.iframe,
                    }}
                  />
                )}
                {data?.image && (
                  <div className="image-wrapper">
                    <Image
                      src={data?.image}
                      alt={data?.alt ? data?.alt : "Image"}
                      width={data?.imageWidth ? data?.imageWidth : "100%"}
                      height={data?.imageHeight ? data?.imageHeight : "100%"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>}

      </div>
    </div>
  );
}

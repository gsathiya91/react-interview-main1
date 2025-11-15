import Link from "next/link";
import CardLoading from "../CardLoading";

export default function Announcements({
  columnOne,
  columnTwo,
  staticTitle,
  becomeData,
  Loading,
}) {
  return (
    <>
      <section className="announcements">
        <div className="container mx-auto px-4">
          <div className="become-content grid grid-cols-12 gap-5">
            <div className="md:col-span-4 col-span-12">
              <h2 className="lg:hidden block h1">{becomeData?.title}</h2>
              <h2
                className="lg:block hidden h1"
                dangerouslySetInnerHTML={{
                  __html: becomeData?.mobileTitle,
                }}
              />
            </div>
            <div className="paragraph md:col-span-8 col-span-12 ">
              {becomeData?.para?.map((items, i) => {
                return (
                  <p key={i} className="p1">
                    <b>{items?.heading}</b>
                    <br />
                    {items?.description}
                  </p>
                );
              })}
              <div className="text-center">
                <Link href={becomeData?.buttonLink}>
                  <a
                    aria-label={becomeData?.buttonName}
                    gtmlinkname={becomeData?.buttonName}
                    gtmlinkcontext="Annoncement"
                    className="global-btn"
                  >
                    <i className="arrow-icon">
                      <svg
                        style={{ height: "16px", width: "16px" }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#fff"
                      >
                        <path d="M310.627 438.627l160-160c12.497-12.496 12.497-32.758 0-45.255l-160-160c-12.497-12.496-32.758-12.496-45.255 0-12.497 12.497-12.497 32.758 0 45.255l105.373 105.373h-306.745c-17.673 0-32 14.327-32 32s14.327 32 32 32h306.745l-105.373 105.373c-6.248 6.248-9.372 14.438-9.372 22.627s3.124 16.379 9.372 22.627c12.497 12.497 32.758 12.497 45.255 0z"></path>
                      </svg>
                    </i>
                    <span>{becomeData?.buttonName}</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

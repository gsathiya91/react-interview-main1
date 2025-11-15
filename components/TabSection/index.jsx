import Link from "next/link";
import * as React from "react";
// import Router from "next/router";
import { useRouter } from "next/router";

const TabSection = ({ data, className }) => {
  const router = useRouter();

  return (
    <>
      <section className={`tab-section ${className ? className : ""}`}>
        <div className="container mx-auto px-4">
          <ul className="md:flex justify-center">
            {data?.map((item, i) => {
              return (
                <li
                  style={{
                    backgroundColor: item?.link.includes(router.pathname)
                      ? "#000"
                      : "#fff",
                    color: item?.link.includes(router.pathname)
                      ? "#fff"
                      : "#777",
                  }}
                  key={i}
                >
                  <Link href={item?.link}>
                    <a
                      aria-label={item?.title}
                      gtmlinkname={item?.title}
                      gtmlinkcontext="Tab Section"
                    >
                      {item?.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TabSection;

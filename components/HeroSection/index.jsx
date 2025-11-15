import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "next/router";

export default function HeroSection({ data, className, noGrid }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <section className={`hero-section ${className ? className : ""}`}>
      <div className="container mx-auto px-4">
        <div
          className={`${noGrid ? "" : "grid grid-cols-12"
            } content-wrapper gap-5 `}
        >
          <div className="md:col-span-4 col-span-12">
            {data?.mainTitle && (
              <div
                className="main-title"
                dangerouslySetInnerHTML={{
                  __html: data.mainTitle,
                }}
              />
            )}
            {data?.title && <h1 className="title">{data?.title}</h1>}
          </div>

          <div className="md:col-span-8 col-span-12">
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";

interface Breadcumb1Props {
  title: string;
  brief: string;
  isBtnActive: boolean;
}

const Breadcumb1: React.FC<Breadcumb1Props> = ({ title, brief, isBtnActive }) => {
  return (
    <section className="breadcumb-section wow fadeInUp mt40">
      <div className="cta-commmon-v1 cta-banner bgc-thm2 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
        <img
          className="left-top-img wow zoomIn"
          src="/images/vector-img/left-top.png"
          alt="object 1"
        />
        <img
          className="right-bottom-img wow zoomIn"
          src="/images/vector-img/right-bottom.png"
          alt="object 2"
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div
                className="position-relative wow fadeInUp"
                data-wow-delay="300ms"
              >
                <h2 className="text-white">{title}</h2>
                <p className="text mb30 text-white">{brief}</p>
                {isBtnActive && (
                  <Link href="/contact" className="ud-btn btn-thm">
                    Become Seller
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcumb1;

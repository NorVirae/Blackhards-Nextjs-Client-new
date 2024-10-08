import { steps } from "@/data/steps";

import React from "react";

export default function NeedSomething() {
  return (
    <section className="cta-banner-about2 at-home18 mx-auto maxw1700 position-relative pt60-lg pb60-lg">
      <img
        className="cta-about2-img bdrs24 d-none d-xl-block"
        // src="/images/about/about-18.jpg"
        src="/images/about/Assassingmain1.png"
        alt=" image "
      />
      <div className="container">
        <div className="row">
          <div className="col-md-11 wow fadeInUp" data-wow-delay="200ms">
            <div className="main-title">
              <h2 className="title text-capitalize">Welcome to Black.AI</h2>
              <p className="text">
                Unlock the power of our AI-driven marketplace with dynamic<br />
                pricing to keep your products aligned with market trends,<br />
                ensuring steady revenue growth.
              </p>
            </div>
          </div>
        </div>
        <div className="row wow fadeInDown" data-wow-delay="400ms">
          {steps.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-sm-6 col-lg-4 col-xl-3">
              <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
                <span className={`icon fz40 ${elm.iconClass}`}></span>
                <h4 className="iconbox-title mt20">{elm.title}</h4>
                <p className="text mb-0">{elm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useState } from "react";
import shopStore from "@/store/shopStore";

export default function TrendingGameCard({ data }) {
  const [isFavActive, setFavActive] = useState(false);

  const { pathname } = useLocation();
  const addToCart = shopStore((state) => state.addToCart);
  const products = shopStore((state) => state.products);

  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    addToCart(product);
    navigate("/shop-cart");
  };

  const isAdded = products.some((product) => product.id === data.id);
  return (
    <>
      <div
        className={`listing-style1 ${
          pathname === "/home-4" ? "default-box-shadow1 bdrs8" : ""
        } ${pathname === "/home-6" ? "default-box-shadow1 border-0" : ""}
                 ${
                   pathname === "/home-9"
                     ? "border-0 default-box-shadow1 bdrs16"
                     : ""
                 } 
                ${pathname === "/home-10" ? "bdrs16" : ""}
                ${pathname === "/home-17" ? "bdrs16" : ""}
                ${pathname === "/home-15" ? "bdrs16" : ""}
                ${pathname === "/home-12" ? "bdrs16" : ""}
                 ${
                   pathname === "/home-5"
                     ? "style4 default-box-shadow1 mb60"
                     : ""
                 } 
                 ${
                   pathname === "/home-18"
                     ? "style4 default-box-shadow1 mb60"
                     : ""
                 } 
                 ${
                   pathname === "/home-19"
                     ? "style4 default-box-shadow1 mb60"
                     : ""
                 } 
                ${pathname === "/home-8" ? "style5" : ""}`}
      >
        <div className="list-thumb">
          <img
            className="w-100 h-100 object-fit-cover"
            src={data.img}
            alt="thumbnail"
          />
          <a
            onClick={() => setFavActive(!isFavActive)}
            className={`listing-fav fz12 ${isFavActive ? "ui-fav-active" : ""}`}
          >
            <span className="far fa-heart" />
          </a>
        </div>
        <div className={`list-content ${pathname === "/home-8" ? "px-0" : ""}`}>
          <p className="list-text body-color fz14 mb-1">{data.category}</p>
          <h5 className="list-title">
            <Link to={`/game/preview/${data.id}`}>
              {data.title.slice(0, 40) + "..."}
            </Link>
          </h5>
          <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              <span className="dark-color me-2">{data.rating}</span>
              {data.review} reviews
            </p>
          </div>
          <hr className="my-2" />
          <div className="list-meta d-flex justify-content-between align-items-center mt15">
            <a className="d-flex" href="#">
              <span className="position-relative mr10">
                <img
                  className="rounded-circle wa"
                  src={data.author.img}
                  alt="Freelancer Photo"
                />
                <span className="online-badges" />
              </span>
              <span className="fz14">{data.author.name}</span>
            </a>
            <div className="budget">
              <p className="mb-0 body-color">
                Market Price
                <span className="fz17 fw500 dark-color ms-1">
                  ${data.price}
                </span>
              </p>
            </div>
          </div>
        </div>
        <a
          onClick={() => addToCartHandler(data)}
          className={`ud-btn ${isAdded ? "btn-thm2" : "btn-light-thm"}`}
        >
          {isAdded ? "Added Cart" : "Add to cart"}
          <i className="fal fa-arrow-right-long" />
        </a>
      </div>
    </>
  );
}

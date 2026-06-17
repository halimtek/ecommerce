import React, { useContext } from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
          </div>
          <div className="productdisplay-right-description">
            {product.description ||
              `${product.name} — quality you can rely on, backed by HalimTekShop's standard warranty and support.`}
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className="productdisplay-right-category">
            <span>Category :</span> {product.category}{" "}
          </p>
          <p className="productdisplay-right-category">
            <span>Availability :</span> {product.available === false ? "Out of stock" : "In stock"}{" "}
          </p>
        
      </div>
    </div>
  );
};

export default ProductDisplay;

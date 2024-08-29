import * as React from "react";
import "./product.css";
import "./product_mobiles.css";
import TestImage from "../media/test.jpg";
import Button from "@mui/material/Button";

export default function product() {
  return (
    <div className="product">
      <div className="top-products">
    
        <div className="product_item">
          <img src={TestImage} className="product_img" />
          <h2 className="product_title">High-neck padded Gilet</h2>
          <h3 className="product_price">89.99 $</h3>
          <Button
            id="oxn_btn"
            color="primary"
            variant="contained"
            size="small"
            component="a"
            target="_blank"
          >
            Shop Now
          </Button>
        </div>
        <div className="product_item">
          <img src={TestImage} className="product_img" />
          <h2 className="product_title">High-neck padded Gilet</h2>
          <h3 className="product_price">89.99 $</h3>
          <Button
            id="oxn_btn"
            color="primary"
            variant="contained"
            size="small"
            component="a"
            target="_blank"
          >
            Shop Now
          </Button>
        </div>
        <div className="product_item third">
          <img src={TestImage} className="product_img" />
          <h2 className="product_title">High-neck padded Gilet</h2>
          <h3 className="product_price">89.99 $</h3>
          <Button
            id="oxn_btn"
            color="primary"
            variant="contained"
            size="small"
            component="a"
            target="_blank"
          >
            Shop Now
          </Button>
        </div>
    
      </div>

      <div className="bottom-products">

      <div className="product_item">
          <img src={TestImage} className="product_img" />
          <h2 className="product_title">High-neck padded Gilet</h2>
          <h3 className="product_price">89.99 $</h3>
          <Button
            id="oxn_btn"
            color="primary"
            variant="contained"
            size="small"
            component="a"
            target="_blank"
          >
            Shop Now
          </Button>
        </div>
        <div className="product_item">
          <img src={TestImage} className="product_img" />
          <h2 className="product_title">High-neck padded Gilet</h2>
          <h3 className="product_price">89.99 $</h3>
          <Button
            id="oxn_btn"
            color="primary"
            variant="contained"
            size="small"
            component="a"
            target="_blank"
          >
            Shop Now
          </Button>
        </div>
        <div className="product_item third">
          <img src={TestImage} className="product_img" />
          <h2 className="product_title">High-neck padded Gilet</h2>
          <h3 className="product_price">89.99 $</h3>
          <Button
            id="oxn_btn"
            color="primary"
            variant="contained"
            size="small"
            component="a"
            target="_blank"
          >
            Shop Now
          </Button>
        </div>
          </div>
    </div>

);
}

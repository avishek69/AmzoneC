import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import "./CheckoutProduct.css";
import Subtotal from "./Subtotal";
import Header from "./Header";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout-left">
          <img
            alt="Ads"
            className="checkout-ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          {basket?.length === 0 ? (
            <div>
              <h2> Your Shopping basket is empty</h2>
              <p>
                You have no items in your basked. To buy one or more items,
                click "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkoutTitle"> Your Shopping basket</h2>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket?.length > 0 && (
          <div className="checkout-right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;

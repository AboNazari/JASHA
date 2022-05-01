import React from "react";
import DonationAmount from "../components/DonationAmount";
import { ReactComponent as Leaf } from "../images/Leafs.svg";
import { ReactComponent as Vector } from "../images/vector.svg";
import AmountsDonate from "../data/AmountsDonate";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donation = () => {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car",
  });

  // Handle Token Function
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex items-center w-[70%] m-auto justify-end bg-gradient-to-l from-primary to-black rounded-2xl z-10">
        <div className="w-3/5  pr-20 ">
          <h3 className="text-white font-primary text-3xl  mb-5">DONATE NOW</h3>
          <p className="text-white text-lg font-primary">
            A big thank you to the kindest and most generous sponsors! Let’s
            make a positive impact together on this world to be a better place
            for everyone!
          </p>
        </div>
        <Leaf />
      </div>
      {/* Second Section */}
      <div className="-mt-32 mx-auto ">
        <Vector />
      </div>
      {/* section three */}
      <div className="flex items-center w-[70%] m-auto h-2/4  justify-end bg-gradient-to-r from-bright to-gray rounded-2xl p-16 -mt-32 border-2 z-10">
        <div className="w-2/4">
          <h3 className=" font-primary text-3xl  mb-5">
            CHOOSE PAYMENT METHOD
          </h3>
          <p className=" text-lg font-primary">
            Remember, “giving is not just about making a donation It’s about
            making the difference.”
          </p>
          <p className="text-right text-lg"> - Kathy Calvin</p>
        </div>
        <div className="w-2/4">
          <div className="grid grid-cols-2 gap-y-5 gap-x-2 justify-items-center w-3/4 m-auto">
            {AmountsDonate.map((data) => {
              return (
                <DonationAmount
                  key={data.id}
                  name={data.name}
                  id={data.id}
                  amount={data.amount}
                />
              );
            })}
            <input
              type="text "
              className="border-2 border-black rounded-lg px-4 text-xl max-w-[13rem] bg-white"
              placeholder="Enter an amount..."
            />
          </div>
          <button className="border-2 border-black rounded-lg px-5 py-3 mt-4 text-xl max-w-[13rem] bg-primary text-white ml-[65%] hover:bg-white hover:text-black">
            Press to Proceed
          </button>
          <StripeCheckout
            stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
            token={handleToken}
            amount={product.price * 100}
            name="product"
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  );
};

export default Donation;

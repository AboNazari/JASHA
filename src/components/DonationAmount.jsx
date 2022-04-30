import { useState } from "react";

const DonationAmount = ({ amount, id }) => {
  const [checked, setChecked] = useState(false);

  const SetChecked = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  return (
    <div className="flex justify-center align-middle">
      <input
        type="checkbox"
        className="w-[16rem] h-[4rem] absolute m-auto checked:bg-primary"
        name={id}
        id={id}
        value={amount}
        onClick={SetChecked}
      />
      {checked ? (
        <label
          htmlFor={id}
          className="text-[2.5rem] border-2 border-black z-10 text-white bg-primary rounded-lg py-4 px-16 "
        >
          {"$" + amount}
        </label>
      ) : (
        <label
          htmlFor="five"
          className="text-[2.5rem] border-2 border-black z-10 rounded-lg py-4 px-16 bg-white "
        >
          {"$" + amount}
        </label>
      )}
    </div>
  );
};

export default DonationAmount;
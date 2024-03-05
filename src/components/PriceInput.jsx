import React, { useState } from "react";

const PriceInput = ({ price, negociable, phone }) => {
  const [mode, setMode] = useState("price");

  return (
    <>
      <div className="bg-base-200 mb-8 p-4 rounded-lg flex flex-col">
        {/* <h2 className="text-primary font-semibold text-2xl py-3">Price</h2> */}
        <div className="grid grid-cols-2 lg:w-[30%] mb-6">
          <button type="button" onClick={() => setMode("price")} className={`btn bg-base-300 rounded-r-none  ${mode == "price" ? "bg-primary text-primary-content hover:bg-primary" : ""} `}>
            Price
          </button>
          <button type="button" onClick={() => setMode("exchange")} className={`btn bg-base-300 rounded-l-none  ${mode == "exchange" ? "bg-primary text-primary-content hover:bg-primary" : ""}`}>
            Exchange
          </button>
        </div>
        {mode == "price" ? (
          <div className="grid grid-cols-2 lg:w-[30%] font-semibold">
            <div className="flex flex-col">
              <label htmlFor="price" className="mb-1">
                Select Price
              </label>
              <input type="number" step="0.01" name="price" placeholder="1234.34$" defaultValue={price} max={100000} id="price" required className="input input-bordered input-sm bg-base-300 mb-4" />
            </div>
            <div className="flex flex-col justify-center pt-2 pl-4">
              <label className="label cursor-pointer">
                <span className="label-text">Negociable</span>
                <input type="checkbox" name="negociable" defaultChecked={negociable} className="toggle toggle-secondary" />
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* TEL INPUT */}
        <div className="py-2">
          <label className="font-semibold">
            Phone number
            <input type="tel" name="phone" placeholder="Tel." minLength={10} maxLength={10} defaultValue={phone} className="input input-bordered bg-base-300 input-sm mx-4 " />
          </label>
          <p className="text-sm text-slate-400 mt-1">The phone number you wish to be contacted at for this product</p>
        </div>
      </div>
    </>
  );
};

export default PriceInput;

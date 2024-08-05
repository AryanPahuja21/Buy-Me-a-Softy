import React from "react";

const BuyForm = () => {
  return (
    <div className="h-[80vh] w-[100vw] flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-bold underline">Buy Me a Softy</h1>
      <main>
        <form className="flex flex-col space-y-7">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-96 border border-gray-300 p-1 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold">
              Message:
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Enter a note for me"
              className="w-96 min-h-9 border border-gray-300 p-1 rounded-md"
              required
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default BuyForm;

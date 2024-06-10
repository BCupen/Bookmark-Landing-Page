import { useState } from "react";
import { Error } from "./SVGs";

const CTA = () => {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState("");

  function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") setHasError(true);
    else setHasError(!validateEmail(email));
  };
  return (
    <div className="w-full flex flex-col items-center gap-8 bg-primary-blue py-12 px-8">
      <h4 className="font-medium uppercase tracking-[0.25em] text-white">
        35,000+ already joined
      </h4>
      <h3 className="max-w-md text-center font-semibold text-white text-3xl">
        Stay up-to-date with what we're doing
      </h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full flex flex-col md:flex-row md:justify-center md:items-start gap-4"
      >
        <div
          className={`${
            hasError ? "border-primary-red bg-primary-red" : "border-white"
          } overflow-clip border-2 rounded-md`}
        >
          <span className="md:min-w-72 bg-white flex justify-between items-center p-3">
            <input
              className="focus:outline-none"
              placeholder="Enter your email address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            {hasError && <Error />}
          </span>
          {hasError && (
            <i className="px-2 w-full bg-primary-red text-white font-medium">
              Whoops, make sure its an email
            </i>
          )}
        </div>

        <button
          type="submit"
          className="py-3 px-6 font-medium bg-primary-red text-white rounded-md border-2 border-transparent hover:border-primary-red hover:bg-white hover:text-primary-red"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default CTA;

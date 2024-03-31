import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
    >
      <h3 className="text-4xl font-bold font-palanquin leading-[68px] lg:max-w-md">
        Signup for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col 
      gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full "
      >
        <input
          className="input"
          type="text"
          placeholder="subscribe@nike.com"
          name=""
          id=""
        />
        <div className="flex max-sm:justify-end items-center justify-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

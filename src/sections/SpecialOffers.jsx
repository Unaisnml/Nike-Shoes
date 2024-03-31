import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-conainer">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          alt="offerImage"
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red  "> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover exclusive deals and irresistible discounts in our Special
          Offer section! Dive into a treasure trove of savings where every click
          unveils fantastic.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Whether you're seeking tech gadgets, fashion essentials, or home decor
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

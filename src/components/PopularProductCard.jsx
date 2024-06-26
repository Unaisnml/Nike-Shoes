import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] transition-transform duration-700 transform hover:scale-110"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="ratings" height={24} width={24} />
        <p className="font-montserrat text-xl text-slate-gray leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin font-semibold text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;

import Image from "next/image";
import ingredientsImage from "@/app/assets/inggredients-image.webp";
import OrganicIcon from "@/app/assets/icons/organic.svg";
import FitsSkinIcon from "@/app/assets/icons/fits-skin.svg";
import EasyUseIcon from "@/app/assets/icons/easy-use.svg";

export default function Ingredients() {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[50vh] relative">
      <div className="w-full lg:w-1/2 bg-background p-12 flex flex-col relative">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading tracking-tight text-primary leading-[1.1] max-w-xl">
          Inspired by traditional knowledge and nature
        </h2>

        <div className="absolute items-end justify-center w-full bottom-[-15%] md:bottom-[-20%] z-20">
          <Image
            src={ingredientsImage}
            alt="Natural Ingredients"
            className="h-[30vh] md:h-[60vh] w-auto max-w-none object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-primary-surface p-12 flex flex-col justify-center gap-8">
        <div className="flex gap-6 lg:gap-8 items-start">
          <div className="text-gray-40 w-14 h-14 lg:w-16 lg:h-16 shrink-0 mt-1">
            <OrganicIcon className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-2xl text-primary">100% Organic</h6>
            <p className="text-gray-80 text-xl leading-relaxed max-w-md">
              We craft skincare using the most exquisite ingredients from the
              plant, earth and mineral realms.
            </p>
          </div>
        </div>

        <div className="flex gap-6 lg:gap-8 items-start">
          <div className="text-gray-40 w-14 h-14 lg:w-16 lg:h-16 shrink-0 mt-1">
            <FitsSkinIcon className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-2xl text-primary">Fits your skin</h6>
            <p className="text-gray-80 text-xl leading-relaxed max-w-md">
              Its all natural and processed based on traditional knowledge with
              modern technology.
            </p>
          </div>
        </div>

        <div className="flex gap-6 lg:gap-8 items-start">
          <div className="text-gray-40 w-14 h-14 lg:w-16 lg:h-16 shrink-0 mt-1">
            <EasyUseIcon className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-2xl text-primary">Easy to use</h6>
            <p className="text-gray-80 text-xl leading-relaxed max-w-md">
              Packed with a unique design as well as usefull that can help you
              perform routine skin care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

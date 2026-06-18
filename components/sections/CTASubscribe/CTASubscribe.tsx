import ArrowRight from "@/app/assets/icons/arrow-right.svg";

export default function CTA() {
  return (
    <section className="flex flex-col gap-6 py-8 px-4 items-start bg-gray-40">
      <h2 className="text-[40px] text-gray-0">
        Subscribe to get 10% off your first order
      </h2>
      <form className="flex h-[70px] w-full bg-gray-0">
        <input
          type="email"
          placeholder="Drop your email here"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-6 text-xl text-primary placeholder:text-gray-40 outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex w-[88px] shrink-0 items-center justify-center border-l border-primary-border text-primary transition-colors hover:bg-primary-surface"
        >
          <ArrowRight className="h-[19px] w-[31px]" />
        </button>
      </form>
    </section>
  );
}

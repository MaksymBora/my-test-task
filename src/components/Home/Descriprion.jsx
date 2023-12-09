export const Description = () => {
  return (
    <section className="md:w-[1280px] md:container-xl pb-4 md:pb-8 mx-auto my-16 text-sky-800 dark:text-gray-400 ">
      <h1 className="text-3xl font-medium md:text-4xl text-left">
        Rent a car for a month with complete peace of mind
      </h1>
      <div className="w-full mt-12  flex flex-col md:w-[768px] gap-6 md:gap-8">
        <p className="text-sm md:text-base">
          Do you need a car for a longer period of time but without the stress
          of paperwork to fill out or deposit to pay? With SHARE NOW you&apos;ve
          just found the flexible solution you were looking for!
        </p>
        <p className="text-sm md:text-base">
          Choose the model you prefer via our app and pre-book it in advance
          from 1 to 30 days. And the best thing is that you neither have to
          worry about refuelling the car nor bringing it back to a rental agency
          when you&apos;re done.
        </p>

        <p className="text-sm md:text-base">
          If you need a car for longer than a month,{' '}
          <span className="text-logoColor">
            SHARE NOW car subscription in Kyiv
          </span>{' '}
          might be the best solution for you.
        </p>
      </div>
    </section>
  );
};

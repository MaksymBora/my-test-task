import cardImg2 from '../../assets/images/cardimg2.jpg';
import cardImg3 from '../../assets/images/cardimg3.jpg';

export const CardPreBook = () => {
  return (
    <>
      <section className="md:w-[1212px] md:container-xl py-[24px] px-[16px] md:pb-8 mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:justify-between">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={cardImg2}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="flex flex-col gap-y-[80px]">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    GUARANTEE YOURSELF A CAR
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Book a car in advance and we&apos;ll deliver it to you{' '}
                    {'\u2014'} when you want it, where you want it.
                  </p>
                </div>
                <a
                  href="tel:+380730000000"
                  type="button"
                  className="m-0 py-[12px] px-[50px] btn-link"
                >
                  Pre-Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={cardImg3}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Where can I rent a SHARE NOW car?
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                SHARE NOW cars free-float within the city. During your monthly
                rental, you can of course leave the{' '}
                <span className="text-logoColor">Home Area</span>, just bring
                the car back when you&apos;re done.
              </p>

              <a
                href="tel:+380730000000"
                type="button"
                className="m-0 py-[12px] px-[50px] btn-link"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

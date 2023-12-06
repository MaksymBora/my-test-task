import cardImg from '../../assets/images/cardimg2.jpg';
import { Button } from '../Button';

export const CardPreBook = () => {
  return (
    <>
      <section className="md:w-[1280px] md:container-xl pb-4 md:pb-8 mx-auto">
        <div>
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={cardImg}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                GUARANTEE YOURSELF A CAR
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Book a car in advance and we'll deliver it to you – when you
                want it, where you want it.
              </p>
              <Button title={'Pre-Book Now'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

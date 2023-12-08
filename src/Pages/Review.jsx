export const Review = () => {
  return (
    <section className="md:w-[1280px] md:container-xl pb-[16px] md:pb-[32px] mx-auto">
      <div className="grid mb-[32px] border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <figure className="flex flex-col items-center justify-center p-[32px] text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-[16px] text-gray-500 lg:mb-[32px] dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Loved the service with rental cars!
            </h3>
            <p className="my-4">
              Very reliable and great value! Staff was very kind and explained
              everything well!
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-[36px] h-[36px]"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div className="space-y-[2px] font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Bonnie Green</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 ">
                November 12, 2023
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-[16px] text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Exceptional service
            </h3>
            <p className="my-[16px]">
              After forgetting my driving licence I was unable to take the car
              when I arrived at Alicante airport. My wife had to drive but the
              car rental provider would not change the contract so I had to take
              a new one at a extra charge. However Rental cars were very helpful
              refunding the full money after calling their office. The money was
              in my account within a few days. Will definitely use them again
              when renting a car anywhere.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-[36px] h-[36px]"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div className="space-y-[2px] font-medium dark:text-white text-left rtl:text-right ms-[12px]">
              <div>Roberta Casas</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                October 19, 2023
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-[32px] text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-[16px] text-gray-500 lg:mb-[32px] dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              The best company in the world
            </h3>
            <p className="my-4">
              I obtained a very competitive rent price and additional insurance
              policy. Had some issues with the insurance policy which were
              promptly solved by phone with the help desk.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-[36px] h-[36px]"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-[2px] font-medium dark:text-white text-left rtl:text-right ms-[12px]">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                December 1, 2023
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Very helpful help desk when you layin…
            </h3>
            <p className="my-4">
              very helpful help desk when you layin on the ground and cryin ;)
              thanks to them, now palermo is the best memories
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-[36px] h-[36px]"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile picture"
            />
            <div className="space-y-[2px] font-medium dark:text-white text-left rtl:text-right ms-[12px]">
              <div>Joseph McFall</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                December 2, 2023
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

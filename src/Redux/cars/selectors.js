export const selectCars = (state) => state.cars.catalog;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;

export const selectTotalCars = (state) => state.cars.catalog.length;

export const selectFilterCars = (state) => state.filter.formData;

// export const selectFilteredCarsList = createSelector(
//   [selectAllCarsList, selectFilterCars],
//   (cars, dataFromFilter) => {
//     const filteredCars = cars.filter((car) => {
//       const { maker, price, mileageFrom, mileageTo } = dataFromFilter;

//       if (
//         (maker !== null && car.maker !== maker) ||
//         (price !== null && car.price !== price) ||
//         (mileageFrom >= 0 && car.mileageFrom < mileageFrom) ||
//         (mileageTo >= 0 && car.mileageTo > mileageTo)
//       ) {
//         return false;
//       }
//       return true;
//     });

//     return filteredCars.slice(0, 12);
//   }
// );

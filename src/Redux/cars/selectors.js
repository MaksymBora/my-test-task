export const selectCars = (state) => state.cars.catalog;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;

export const selectTotalCars = (state) => state.cars.catalog.length;

export const selectFilterCars = (state) => state.filter.formData;

export const selectIsFilterOn = (state) => state.cars.isFilter;

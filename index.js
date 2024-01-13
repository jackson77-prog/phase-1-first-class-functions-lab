// Code your solution in this file!

// two first drivers returning
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // two first drivers returning
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };

  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  
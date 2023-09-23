// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) { 
    return drivers.slice(0,2)
}
//returnFirstTwoDrivers()

 function returnLastTwoDrivers (drivers) {
    return drivers.slice(2)
}
//returnLastTwoDrivers()

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

  //function selectingDrivers() {}

function createFareMultiplier(num) {
   
 return function fareMultiplier(fare) {
 
     return num * fare
}
}
createFareMultiplier(5)
//fareMultiplier(5)

//const fareDoubler = fareMultiplier()
//fareDoubler(10)
//createFareMultiplier(2)

//function fareDoubler(){}
 const fareDoubler = createFareMultiplier(2)
fareDoubler(10)

const fareTripler = createFareMultiplier(3)
fareTripler(12)


function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers)
}
selectDifferentDrivers()
// Code your solution in this file!

const drivers=["Antonia","Nuru","Amari","Mo"]
const returnFirstTwoDrivers =(arr)=>{
    const newA=arr.slice(0,3)
    
    return newA
    
}

returnFirstTwoDrivers(drivers)


const returnLastTwoDrivers=(arr)=>{
return [arr[-2],arr[-1]]
}

returnLastTwoDrivers(drivers)

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]


const  createFareMultiplier = (num1) => {
    return function (num2) {
      return num1 * num2;
    };
  }
const fareDoubler =  createFareMultiplier(2)

const fareTripler =  createFareMultiplier(3)

const selectDifferentDrivers = (arr, myF) =>{
    return myF(arr)
}
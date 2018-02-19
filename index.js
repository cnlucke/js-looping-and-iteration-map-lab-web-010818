// lowerCaseDrivers - this function takes an array of drivers, and returns an array of the drivers names in lowercase.
// nameToAttributes - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.
// attributesToPhrase - this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".

function lowerCaseDrivers(drivers) {
  const lowercased = drivers.map(function(driver) {return driver.toLowerCase()});
  return lowercased;
}

function nameToAttributes(drivers) {
  const splitNames = drivers.map(function(driver) {
    return Object.assign({}, { firstName: driver.split(' ')[0], lastName: driver.split(' ')[1] })
  });
  return splitNames;
}

function attributesToPhrase(drivers) {
  const phrases = drivers.map(function(driver) { return `${driver.name} is from ${driver.hometown}`});
  return phrases;

}

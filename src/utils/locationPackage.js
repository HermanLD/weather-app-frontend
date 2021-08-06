//? Takes in LATITUDE, LONGITUDE, & an city name (i.e Los Angeles)
function locationPackage(lat, lon, address) {
  return {
    lat,
    lon,
    address,
  };
}

module.exports = locationPackage;

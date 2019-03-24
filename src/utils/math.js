/**
 * Get a random number in a certain range
 * 
 * @param  {Number} min
 * @param  {Number} max
 * @returns {Number} randomValue
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (sampleActivity > MODERN_ACTIVITY || isNaN(sampleActivity) || sampleActivity <= 0 || typeof sampleActivity !== 'string') return false;
    else return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693);
}

/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const index = input.search(/[A-Z]/gi);
    var result = index > 0 ? input.slice(0, index) : 1;
    var fractions = index > 0 && result.match(/\//g) ? result.match(/\//g).length : 0;

    if (fractions <= 1) {
      return eval(result);
    } else {
      return 'Invalid number';
    }
  };
  
  this.getUnit = function(input) {
    var text = input.slice(input.search(/([A-Z])\w+/gi));
    var measures = /\bgal\b|\blbs\b|\bmi\b|\bL\b|\bkg\b|\bkm\b/gi;
    var result = text.match(measures) ? text.match(measures)[0].toLowerCase() : '';
    //console.log(result,'unit', input, text, input.match(/\bgal\b|\blbs\b|\bmi\b/g));
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'gal': 
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'l': 
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = undefined;
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case 'gal': 
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'l': 
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = '';
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case 'gal': 
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'l': 
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }
    return result ? Number.parseFloat(result.toFixed(5)) : undefined;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit); 
    return result;
  };
  
}

module.exports = ConvertHandler;

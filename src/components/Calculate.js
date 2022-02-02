

function factrial(n) {

    if (n === 0 || n === 1)
         return 1;
    else
        return n * factrial(n - 1);
 }
 
 
 function combination(n, r) {
     return factrial(n) / (factrial(r) * factrial(n-r));
 }
 
function coefficient(x, y, n, r) {
    let ret = x * y * combination(n, r);

    if(ret === 1) return ''; // if coefficient is 1 return nothing because we dont usually put 1 as coeffocient

    else
    return ret;
 }
 
 
 export function Binomial_Sigma(x, y, n) {
     let x_co;
     let y_co;
     let x_coeffcient = [];
     let y_coeffcient = [];
     let coefficients = [];
     let result = [];
     let x_power = [];
     let y_power = [];
     let ans = '';


     n = Number(n); // converts n to an integer

     if(x === 0) {
        y_co = Math.pow(y, n);
        let yPower = 'y^{' + n + '}';
        return y_co + yPower;
     }

     else if(y === 0) {
        x_co = Math.pow(x, n);
        let xPower = 'x^{' + n + '}';
        return x_co + xPower;
     }
    
     for (let j = 0; j < n+1; j++) 
     {
         if(x !== 1) { // x is not 1
             x_co = Math.pow(x, n-j);
             x_coeffcient.push(x_co);
         }
         else {
             x_coeffcient.push(1);
         }
         if(y !== 1) { // y is not 1
             y_co = Math.pow(y, j);
             y_coeffcient.push(y_co);
         }
         else {
             y_coeffcient.push(1);
         }
         x_power.push(n-j);
         y_power.push(j);
         coefficients.push(coefficient(x_coeffcient[j], y_coeffcient[j], n, j));
     }


     for (let i = 0; i < y_power.length; i++) { // convert it to latex syntax
        let term, x, y;
        if(x_power[i] === 0) x = "";
        else if(x_power[i] === 1) x = "x";
        else x = "x^" + '{' + x_power[i] + '}';
        if(y_power[i] === 0) y = "";
        else if(y_power[i] === 1) y = "y";
        else y = "y^"+ '{' + y_power[i] + '}';
        let Coefficient = coefficient(x_coeffcient[i], y_coeffcient[i], n, i); // caluclates coefficient. Could use toFixed(0) but need to consoder a case where coefficient is ''
        let operator = '';
        if(Coefficient > 1) operator = '+'; // for positive values, use +


        if(i === 0) { // first term 
            if(operator === '+') operator = '';
            result.push(operator + Coefficient + x);
        }

        else if(i === y_power.length-1) { // last term
            result.push(operator + Coefficient + y);
        }
        else { // terms in the middle
            result.push(operator + Coefficient + x + y);
        }
        ans += result[i];
    }
    return ans;
 }
 
// function power(base, exponent){
//     if(!exponent) return 1;
//     let power = 1;
//     for(i=1;i<=exponent;i++){
//         power = power*base;
//     }
//     return power;
// }
// power(3,3);
function power(base, exponent) {
  if (!exponent) return 1;
  return base * power(base, exponent - 1);
}
power(4, 4);

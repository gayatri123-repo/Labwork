var cost = 4;
var money = 10;
var balance = money - cost;
var quater = 0;

while (balance <= 6.00 && balance >0.00 )
{
  quater = quater+1;

  balance = balance - 0.25;
console.log('balance is:' + balance + 'quater is:' + quater);
}

console.log(quater);

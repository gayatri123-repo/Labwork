// part 1
let i = 0;
var sum = 0;

while (i <= 20)
{
  if(i== 1 || i== 3||i==5||i==7||i==11||i==13||i==17||i==19)
  {
    console.log("prime number" + i);

  }
  else 
  {
    if (i % 2 == 0)
    {
    console.log ("even number" + i)
    }
  }
  sum = sum + i;
  i ++;
}
console.log("sum is total  of i ="  +  sum);

function maxOfThree(a,b,c)
{
  if ((a>b) && (a>c))
  return a;
  else
  {
    if((b>a) && (b>c))
    return b;

    else

      return c  + " is greater then  " + a + "&" + b;

  }
}
largest = maxOfThree (7,10,11);
console.log(largest);

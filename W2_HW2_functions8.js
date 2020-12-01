
function filterLongWords(FLW,i)
{
   var RLW = [];

   if(FLW[0].length >  i)
   {
     RLW.push(FLW[0]);
    }

    if(FLW[1].length >  i)
    {
      RLW.push(FLW[1]);
     }

     if(FLW[2].length >  i)
     {
       RLW.push(FLW[2]);
      }

  return RLW;
}

array1 = filterLongWords (['apple','bat','cars'],3);
console.log(array1);

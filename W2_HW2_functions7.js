
function findLongestWord(FLW)
{
   if(FLW[0].length > FLW[1].length && FLW[0].length >FLW[2].length)
 {
  return FLW[0].length ;
}
  else
  {
  if  (FLW[1].length > FLW[0].length && FLW[1].length > FLW[2].length)
    {
  return FLW[1].length ;
    }

  else
    {
  return FLW[2].length ;
    }
  }
}

word1 = findLongestWord (['apple','battles','cars']);
console.log(word1);

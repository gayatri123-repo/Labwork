

var str1 = "";
var str2 = "";

for (var i = 1; i <= 10 ; i++)

{

if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9)

  {
    if (i == 9)
    {
      str1 = str1 + i;
    }
    else
    {
      str1 = (str1 + i + ',');
    }
  }
  else
  {
    if (i == 10)
    {
      str2 = str2 + i;
    }
    else {
    str2 = (str2 + i + ',');
    }

  }
}

console.log ("str1 is :" + str1);
console.log("str2 is:" + str2);

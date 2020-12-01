function revString(a)
{
console.log(a);
b = a.split("");
console.log(b);
c = b.reverse();
console.log(c);
d = c.join("");
console.log(d);
return d;
}

Str1 = revString('jag tester');
console.log(Str1);

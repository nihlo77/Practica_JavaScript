let num = 997 //997  2147483647
test = 1

if (num == 1 || num == 0) { console.log(`el número ${num} no es primo`) }
else
  for (let i = 2; test !== 0; i++) {
    test = num % i
    primo = i
  }
if (primo == num) { console.log(`el número ${num} es primo`) }
else { console.log(`el número ${num} no es primo`) }


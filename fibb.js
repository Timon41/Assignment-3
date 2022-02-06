var n1 = 0;  
var n2 = 1; 
var nextNumber; 
var i;
  var num = parseInt (prompt (" Give the limit for sequence"));
  document.write( "Fibonacci numbers : ");
  for ( i = 1; i <= num; i++)
  {  document.write (" " +  n1);
      nextNumber= n1 + n2;

      n1 = n2;
      n2 = nextNumber;
  }

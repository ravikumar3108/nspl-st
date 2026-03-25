#include <stdio.h>

// varibales :- it is used to store or data like charcters and integers.

int main(){
	
//	int :- interger value -1 and 1
// float :- decimal values -0.1 and 0.23
// char :- store only single character. 


int x = 10;
float y = 10.2;
char z = 'A';

// format specifiers :- specilise a data.
// integer :- %d or %i
// float :- %f
// char :- %c 

printf("%i \n", x);
printf("%f \n",y);
printf("%c",z);


// Assign variables 

int num = 29;
int num2 = 34;

num2 = num;
printf("%d \n",num2);


// declare multiple variables :- 
int a , b , c ;

a = b = c = 20;

printf("%d",a);

// identifiers :- names of our varibales.
// names or alphabets A-Z or a-z
// int + alpha 
// camel case
// pascal case 
// varibale name not start with a  number.
// underscore 
// dollar

int $k = 20;

printf("%d \n",$k); 

printf("%d \n", num + num2);





	
	
	return 0;
}


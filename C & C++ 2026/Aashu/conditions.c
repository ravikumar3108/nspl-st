#include <stdio.h>
#include <string.h>

int main(){
	
//	int x = 0;
//	if(x == 0){
//		printf("True");
//	}
//	else if(x > 0){
//		printf("gretaer than 0");
//	}
//	else{
//		
//	}	
//	
//	
////	short hand condition :- 
////Ternary operators
//
//	(x == 0) ? printf("first \n") : printf("second \n");
//	
//// nested conditions :- 
//	int y = 18;
//	int citizen = 0;
//	if( y  == 18){
//		printf("Eligible \n");
//		if(citizen){
//			printf("Nested Condition \n");
//		}
//	}
//	else{
//		printf("Else");
//	}
//	
//	
//	// loops :-  it is a statement which is run when our condition is as well as true..  
//	
//	// while loop 
//	// do-whilw loop :- 
//	// for loop :- 
//	
//	// initialse a variable; 
//	int a = 0;
//	
//	while(a <= 10){
//		printf("%d\n",a);
//		a++;
//	}
//	
//	// break and continue 
//	
////	int b;
////	for(b = 0;b < 20;b++){
////		if(b == 10){
////			break;
////		}
////		printf("%d\n",b);
////	}
//	
//	
//	int b;
//	for(b = 0;b < 20;b++){
//		if(b == 10){
//			continue;
//		}
//		printf("%d\n",b);
//	}
//	
	
	
	
	// Array :- array is used to store multiple data.
	
	int x[] = {10,20,30,30,29};
	
	printf("%d \n",x[0]);
	
//	
    int y[8];
	
	y[0] = 01;
	y[1] = 010;
	y[2] = 02;
	y[3] = 03;

	printf("%d \n",y[5]);
	// size of array :- 
	
	printf("%d \n",sizeof(x));
	
	// length :- 
	printf("%d \n",sizeof(x) / sizeof(x[0]));
	
	// 2d array 
//	[2] :- row 
// [3] :- column 
	
	int tb[2][3] = {
					{1,2,3},
					{4,5,6}
					};
	
	printf("%d \n",tb[0][1]);
	
	// loop on array :- 
	
	
	
	// String :- String are used to store chrcter values.
	// #include <string.h>
	
	char a[] = "HelooAashukumar";
	printf("%s \n",a);
	printf("%c \n",a[0]);
	
	printf("%d \n",sizeof(a));
	
	printf("%d \n",sizeof(a) / sizeof(a[0]));
	
	
	
	
	return 0;
}


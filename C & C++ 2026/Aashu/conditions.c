#include <stdio.h>

int main(){
	
	int x = 0;
	if(x == 0){
		printf("True");
	}
	else if(x > 0){
		printf("gretaer than 0");
	}
	else{
		
	}	
	
	
//	short hand condition :- 
//Ternary operators

	(x == 0) ? printf("first \n") : printf("second \n");
	
// nested conditions :- 
	int y = 18;
	int citizen = 0;
	if( y  == 18){
		printf("Eligible \n");
		if(citizen){
			printf("Nested Condition \n");
		}
	}
	else{
		printf("Else");
	}
	
	
	// loops :-  it is a statement which is run when our condition is as well as true..  
	
	// while loop 
	// do-whilw loop :- 
	// for loop :- 
	
	// initialse a variable; 
	int a = 0;
	
	while(a <= 10){
		printf("%d\n",a);
		a++;
	}
	
	// break and continue 
	
//	int b;
//	for(b = 0;b < 20;b++){
//		if(b == 10){
//			break;
//		}
//		printf("%d\n",b);
//	}
	
	
	int b;
	for(b = 0;b < 20;b++){
		if(b == 10){
			continue;
		}
		printf("%d\n",b);
	}
	
	
	
	
	
	
	
	
	
	
	
	return 0;
}


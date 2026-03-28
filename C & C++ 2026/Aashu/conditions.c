#include <stdio.h>

int main(){
	
	int x = 0;
	if( x == 0){
		printf("True");
	}
	else if(x > 0){
		printf("gretaer than 0");
	}
	else{
		
	}	
	
	
//	short hand condition :- 

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
	
	
	
	return 0;
}


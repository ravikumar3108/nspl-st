#include <stdio.h>
#include <string.h>

// declare a function 
void myfun(){
	printf("Function is running.... \n");
}

// Parameters :- 
void myfun2(int age,char name[]){
	printf("%d \n",age);
	printf("%s \n",name);
	
}

// int function :- which is gives a return value....

int Aashu(){
	return 10 * 10;
}

// default values....

int main(){
		// Function :- it is a block of code which is run when our function is call...
	// void function :- that means the function is not givin any return value...
	// Functions are reusabale
	
//	myfun();
//	myfun();
//	myfun();
//	myfun();
//	myfun2(23,"AAshu");
//	int c = Aashu();
//	printf("%d \n",c);
//	
//	
////	Memory Address :- when a varible is create then it store into our memory.... 
//	// To find the mmory address we can use use a refrence & 
//	
//	int x = 90;
//	int y = 10;
//	printf("%p \n",&x);
//	printf("%p \n",&y);
//
//
//// Pointer :- which is store our memory address..
//
//int a = 10;
//
//printf("%d \n",a);
//
//printf("%p \n",&a);
//
//
//int* pt = &a;
//printf("%p \n",pt);

// user input 

// scanf() // input method 
//
//int x;
//printf("Type a number \n");
//scanf("%d",&x);
//
//printf("my number is: %d",x);


int y;
int z;
printf("Enter a number");
scanf("%d",&z);
for(y = 1;y <= 10;y++){
	printf("%d \n",y * 3);
}

	return 0;
}

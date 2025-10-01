#include <stdio.h>

int main (){
	
	
	FILE *first;
	
//	first = fopen("file.txt","w");
	
//	first = fopen("file.txt","a");

	
//	fprintf(first,"\nMy age is 17.");
	
	
//	first = fopen("file.txt","r");
//	
//	char str[100];
//	
////	Read content and store inside the str...
//	fgets(str , 100 , first);
//	
//	printf("%s",str);
//	
//	fclose(first);
//	
	
	first = fopen("file.txt","r");
	
	char str[100];
	
//	Read content and store inside the str...

	
	while(fgets(str , 100 , first)){
		printf("%s",str);
	}
	
	fclose(first);
	
	
	
	return 0;
	
}

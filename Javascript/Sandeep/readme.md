

FILE :- Keyword / inbuilt

FILE *firstfile
Create a file
firstfile = fopen("filename",mode)

close a file
fclose(firstfile)

mode :- 
    1. w - writes a file 
    2. a - appends data into a new file 
    3. r - reads from a file 


write some text into a text file. 
firstfile = fopen("filename","w")
fprintf() :- function 

Append Content to a file :- 
firstfile = fopen("filename","a")
fprintf() :- function

Read :- 
firstfile = fopen("filename","r")
Store the data 
char str[100];

methods :- fgets() :- 3 parameters :- read content and store the data into string(str).
1. string name 
2. size
3. filename 

then 
printf(formatspecifier , str)


By the loop 

Read :- 
firstfile = fopen("filename","r")
Store the data 
char str[100];

while(){
    
}
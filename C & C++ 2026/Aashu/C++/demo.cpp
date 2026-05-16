#include <iostream>
using namespace std;

//
//int myfun(int x){
//	return 10 * x;
//}

//Syntax of Class
// Create a class...
// Attriutes 
// Methods 
// Methods parameters
// constructor :- automatic call when our class is used. Constructor name is always create with your class name.
// Constructor parameters :- 
// Access specifiers 
// Ecapsulation :- make sure the sensitive data is hidden or not;
//setmethod 
//getmethod





class Aashu {
		// access specifier :- which is allow to use our attributes outside the class..
		public:
			int x;	// Attributes
			int age;		
		// methods :- 
		void name(string name){
			cout << "Claas name is Aashu" << name;
		}	
		
		void name1(){
			cout << "Claas name is Aashu";
		}	
		
};



class Student{
		private:
			int enroll;
	
		public:
			string name;
			int classe;
			int x;
		
		// create a constructor
		Student(string a,int b){
			name = a;
			classe = b;
		}
		
		int setEnroll(int a){
			enroll = a;
		}
		int getEnroll(){
			return enroll;
		}
		
		int getName(){
			return name; 
		}
			
};



//{
//	name:"",
//	classs:""
//}




int main(){
	
	// Object :- Access all the attributes and methods in our class...
//	Aashu firstObj;
//	
//	firstObj.x = 110;
//	firstObj.age = 23;
//	firstObj.name("Aashu");


// Constructor class
Student student1("aashu",24);

student1.x = 10;
//'class Student' has no member named 'y'
//student1.y = 11;


cout << student1.x;
//cout << student1.y;
student1.setEnroll(123);
student1.getEnroll();






	
	
//	cout << firstObj.x << "\n";
//	cout << firstObj.age;
//		
//	int y = myfun(10);
//	cout << y;	
//	myfun(10);	
//	myfun(10);	
	cout << "Start Coding";
	// variables 
	// data types
	// condtions
	// loops
	// array 
	// string 
	// function..
	// OOPS
	
	// object oriented programing......
	// Class
	// Attributes :- varibales
	// methods  :- functions 
	// constructor 
	// access specifier
	// object
	
	// Class is a bluprint which is used to create a multiple Objects.With the help of Attributes and methods..
	
	
	

	return 0;
}





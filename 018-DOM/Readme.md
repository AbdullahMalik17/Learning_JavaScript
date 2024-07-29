# Document Object Model:-
In console of browser . There is a window object . In window object , document object has a list of properties of html are called DOM.
There is a tree like structure in it. 
#### window:- 
It is not a function a javascript , it also made by Browser. It is a group of object and functions .
We see it by writing windiw in console.dir()
##### Uses:-
- [ ] They are also be used to access the html tags .
- [ ] We can also change the content of tag and also remove the tags.
### Accessing Tags:- 
- We can also be accessed an element by Tag Name:-
    document.getElementByTagName("Tag-name");
- We can also accessed an element by Class Name:-
    document.getElementByClassName("Class-name");
- We can also accessed an element by Id name:-
    document.getElementByIdName("Id-name")
- ##### Query Selector
   It is more better way to accees an element.
   It's syntax as follows:-
   document.querySelector("Tag-name\Id-name\Class-name")
   
   Class is accessed by .class-name in it.
   Id is accessed by #Id-name in it. 


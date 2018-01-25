/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/




/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/



/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/



/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/


 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

//jamie's ver
// var newImg = document.createElement("img");
// newImg.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/41PSbsR4FvL._SL500_AC_SS350_.jpg");
// var noImg = document.getElementsByTagName("img")[8];
// var newDiv = document.getElementsByClassName("block3 col-sm-4")[2];
// newDiv.replaceChild(newImg, noImg);

//kyle;s ver
// document.getElementsByClassName("block3 col-sm-4")[2].getElementsByTagName("img")[0].src ="https://images-na.ssl-images-amazon.com/images/I/41PSbsR4FvL._SL500_AC_SS350_.jpg";

// var dElem = document.createElement("div");
// var classChild = document.getElementsByClassName("block3 col-sm-4")[2];

// dElem.id = "name9";
// dElem.innerHTML = "tortie";
// classChild.appendChild(dElem);


//raf ver
var newImg = document.getElementsByTagName("img")[8];
newImg.src =  "https://images-na.ssl-images-amazon.com/images/I/41PSbsR4FvL._SL500_AC_SS350_.jpg";


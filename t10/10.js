/*
Open t10 folder in your IDE/editor. Read the first name and last name values from the form and print them in the <p id="target"> (2p)
remember to stop the default action of the form
you can use attribute selectors in querySelector() to select the <input> elements
example output: Your name is Luke Skywalker
 */


function getFormvalue()
{
  var x=document.getElementById("source");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {
      console.log(x.elements[i].value);
     }
   }
}
getFormvalue()
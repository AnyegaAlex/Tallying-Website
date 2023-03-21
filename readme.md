WHAT I LEARNT BUILDING THIS PROJECT.

* Script tag <script src="#"></script>
* Variables ~ let bus = 23 { states let variable bus be equal to 23}
* Numbers ~ javaScript can handle working with numbers unlike HTML which takes everything as a string e.g :
 let race = 5 + 6 + "eye"
 console.log(race)
  = 11 eye
  ~ use += to increase values and -= to decrease values

* Strings ~ using multiple strings as one can add them on javaScript
* Console.log() ~ used the console.log() for debugging
* functions ~ a function s used to limit repetitive tasks syntax:
let firstName = "Alex"
let greeting = " Hi there :"

function greetingMsg(){
  console.log(greeting + "" + firstName)
}

greetingMsg() ~ Hi there :Alex

~ always remember to call a function if you want it to display whats inside it
greetingMsg()

* The DOM ~ remember the element id is inside the quotation marks
* .getElementById()
document.getElementById (elements_id) this is used to get the element by its id you can edit its context by adding .innerHTML = " what you want to add"
document.getElementById (elements_id).innerHTML = " what you want to add"
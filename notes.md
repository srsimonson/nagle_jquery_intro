## What is jQuery?
Library that someone else wrote in javascript. built on top of javascript. utilize the power of js much shorterhand. able to call upon the methods in a much shorter way.

Appending DOM, taking inputs from DOM. Makes interaction with user easier and more fun.

## How to get jQuery into project
CDN - content delivery network
// <script src="https://code.jquery.com/jquery-3.1.1.min.js">
bad? dependent upon internet connectivity, and this website being available.
better? download it and sourced to each project.

## DOM
Document object model
what the website is. what people look at and interact with.

static vs dynamic pages --
static never changes
dynamic - interactive. we write code that reacts to user's interactions. button clicks for example. however a user wants to use it.

ON DOCUMENT READY:
$('document').ready(onReady);

function onReady(){
    console.log('jQ');
    $("#hello").append('Welcome to my Page!')
}

## jQuery events
$() - selector
-  ID - `$('#some-id')`;
- class - `$('.some-class')`;
- Descendants - `$('ul li')`;
- multiple elements - `$('.mic', '.check').append('test test')`;
- find elements - `$('#solid').find('.rock')`

## DOM traversal
- navigate to parent element - `$('.child').parent( actions inside of parenthesis);
- first level - `$('.parent').children().children()
    - traverse up and down the DOM

parent
    child
        grandchild
            great grandchild


## DOM Manipulation
.addClass
.append

## Getters and Setters
.val(); - both a getter and a setter
google jQuery Getters and Setters, or (accessors?)
Big ol' list of jquery element methods
https://api.jquery.com/category/manipulation/

.val();
.text();
.data();
.attr();
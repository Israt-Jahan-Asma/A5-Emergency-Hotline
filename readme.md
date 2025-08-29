### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: 
getElementById - select a single elements by unique id.
getElementsByClassName - Selects all elements that have a specific class.
querySelector - Selects the first element that matches a CSS selector.
querySelectorAll - Selects all elements that match a CSS selector.

2. How do you **create and insert a new element into the DOM**?
Ans: 
const newDiv = document.createElement("div")
document.body.appendChild(newDiv)

3. What is **Event Bubbling** and how does it work?
Ans: When an event (like a click) happens on an element, it doesn’t just stay on that element — it “bubbles up” the DOM tree through its parent, grandparent, and so on, until it reaches the document.

First, the event runs on the child button.
Then it “bubbles up” to the parent div.
Then to the body (and eventually to document, window).

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event delegation is a technique in JavaScript where you attach a single event listener to a parent element to manage events for its child elements, instead of attaching individual listeners to each child.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: event.preventDefault() - Prevents the default behavior of an element. Does NOT stop the event from bubbling up the DOM. Used when you want the event to happen, but not its default action.

event.stopPropagation() - Stops the event from bubbling (or capturing) further in the DOM tree. Does NOT prevent the default behavior. Used when you want the event to be handled only on the current target, not parents.
---
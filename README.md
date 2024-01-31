# Random quote machine
> A web page that randomly generates a quote every time the button is clicked


![Desktop preview](https://github.com/SimonaPiz/random-quote-machine/assets/91121660/e3c23ec6-3e4c-4fba-bede-c75e97b8b73a)

## Links

- ➡ Solution URL: [Repo GitHub SimonaPiz/](https://github.com/SimonaPiz/random-quote-machine)
- ☑ Live Site URL: [simonapiz.github.io/random-quote-machine/](https://simonapiz.github.io/random-quote-machine/)


## Table of contents

- [Links](#links)
- [Overview](#overview)
- [My process](#my-process)
- [Built with](#built-with)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

### Objective 

Build an app that is functionally similar to this: [random-quote-machine.freecodecamp](https://random-quote-machine.freecodecamp.rocks/).

![image](https://github.com/SimonaPiz/random-quote-machine/assets/91121660/9e9439fe-c519-443a-8cbc-58ab4498b468)

## My process

1. 🗂 Initialize the project on [GitHub](https://github.com/SimonaPiz/random-quote-machine) and use Git for log my commits and versioning my work.

2. ✏ I looked at the designs to start planning how to approach the project
  
3. ⚙ Implemented project features with HTML, SCSS, and JQuery:

   - [☑issue #1](https://github.com/SimonaPiz/random-quote-machine/issues/1) Implement HTML main structure
      - [x]  I can see a wrapper element with a corresponding `id="quote-box"` that contains:
          - [x] an element with a corresponding `id="text"`.
          - [x] an element with a corresponding `id="author"`.
          - [x] a clickable element with a corresponding `id="new-quote"`.
          - [x] a clickable a element with a corresponding `id="tweet-quote"`.
          
           
   - [☑issue #1](https://github.com/SimonaPiz/random-quote-machine/issues/1) Add style
      > I used SCSS extension
    
   - [☑issue #2](https://github.com/SimonaPiz/random-quote-machine/issues/2) Get random quote
      > I used [API Ninjas](https://api-ninjas.com/) and JQuery Ajax request
    
   - [☑issue #3](https://github.com/SimonaPiz/random-quote-machine/issues/3) Add interactions
      - On first load, my quote machine displays:
          - [x] a random quote in the element with `id="text"`.
          - [x] the random quote's author in the element with `id="author"`.
      - When the `#new-quote` button is clicked:
          - [x] my quote machine should fetch a new quote and display it in the `#text` element.
          - [x] My quote machine should fetch the new quote's author and display it in the `#author` element.
          - [x] Change random color 
      - [x] I can tweet the current quote by clicking on the `#tweet-quote` a element. This a element should include the `"twitter.com/intent/tweet"` path in its href attribute to tweet the current quote.
    
   - Test suite provided
       - ✅ 12/12 passed 

## Built with

- Semantic HTML5 markup
- CSS/SCSS custom properties
- Flexbox
- JQuery Ajax
- JQuery Manipulation

## Author

- Website - [Simona Pizio](https://github.com/SimonaPiz)
- Codepen - [SimonaPiz/pen](https://codepen.io/SimonaPiz/pen/oNVwRPy)
- Freecodecamp - [freecodecamp/SimonaPiz](https://www.freecodecamp.org/SimonaPiz)

## Acknowledgements
This is a solution to the [Build a Random Quote Machine](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine) project to earn the [Front End Development Libraries certification](https://www.freecodecamp.org/learn/front-end-development-libraries/) by FreeCodeCamp.

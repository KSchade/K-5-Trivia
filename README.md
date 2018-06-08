## ProjectOne K-5 Trivia Game
K-5 trivia is an elementary themed one player trivia game. Each user selected answer is tracked throughout and a score is displayed after user elects to submit their responses.

Keep your 5th grade audience in mind!! Game should gain and retain a 5th graders attention. Use colorful graphics and present a simple layout. 

##### Mockup:
![](MVP.PNG)


## Requirements
#Technical Requirements
The app must:
- Render in the browser
- Include a separate HTML/CSS/JavaScript files.
- Use Javascript for DOM manipulation.
- Be deployed online, using Github Project pages.
- Use semantic markup for HTML and CSS.
- Show a good commit history with frequest commits.

## Goals
- When an answer is selected the game should track each response.
- If a question is left blank or incorrect the user should not get credit. 
- After clicking submit the user should see their final score.
- A message should display after user clicks submit.
- Have 3 different messages dependent on the users score 1-2"Mehhh...", 3-4"Not Bad :)", 5-6"Awsome Job!".
- When code is refreshed all questions are reset.
- Keep your 5th grade audience in mind while styling. 

## Pseudocode
- hard code 6 questions in html
- If user selects a correct answer add a point to the total
- If user selects an incorrect answer or leaves the question blank do not add a point to the total.
- After answering all questions user clicks submit button
- Out of 6 questions how many answers did the user get correct should display.
- if the user gets 1 or 2 correct display "that" message
- if the user gets 3 or 4 correct display "that" message
- if the user gets 5 or 6 correct display "that" message

**Bonus:**

- Each question is presented one at a time.-- slide show.
- When page is visited the first question should display
- First slide should only be able to select next.
- When user clicks next the following slide should appear
- previous and next arrows should appear on slides 2-5
- on last slide only a previous arrow should appear.
- If the page is not refreshed selected answers should retain if user clicks previous.
- User should only see slides, after game has completed they should not see the background. 
- If page is refreshed all answers are cleared. 

##### Mockup **Bonus:**
![](screenshot.PNG)

### Useful Resources

- [HTML5 Validator](https://html5.validator.nu/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

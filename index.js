const username = prompt("What's your name?");
alert(`Hello, ${username}! Welcome to the pop quiz!`);

let score = 0;

// Question 1
const question1Input = prompt(`Question 1:
Which language is used to style a website?

[1] HTML
[2] CSS
[3] Python
`);

const question1 = Number(question1Input);

if (Number.isNaN(question1)) {
  alert("You must enter a number.");
} else if (question1 < 1 || question1 > 3) {
  alert("Your number must be 1, 2, or 3.");
} else {
  if (question1 === 2) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! The correct answer is CSS.");
  }

  // Question 2
  const question2Input = prompt(`Question 2:
Which symbol is used for comments in JavaScript?

[1] //
[2] **
[3] ##
`);

  const question2 = Number(question2Input);

  if (Number.isNaN(question2)) {
    alert("You must enter a number.");
  } else if (question2 < 1 || question2 > 3) {
    alert("Your number must be 1, 2, or 3.");
  } else {
    if (question2 === 1) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong! The correct answer is //");
    }

    // Question 3
    const question3Input = prompt(`Question 3:
Which one is a JavaScript variable keyword?

[1] let
[2] style
[3] heading
`);

    const question3 = Number(question3Input);

    if (Number.isNaN(question3)) {
      alert("You must enter a number.");
    } else if (question3 < 1 || question3 > 3) {
      alert("Your number must be 1, 2, or 3.");
    } else {
      if (question3 === 1) {
        score++;
        alert("Correct!");
      } else {
        alert("Wrong! The correct answer is let.");
      }

      // Final result
      if (score === 0) {
        alert(`${username}, you got 0 correct. Better luck next time!`);
      } else if (score === 3) {
        alert(`${username}, amazing! You got all 3 questions correct!`);
      } else {
        alert(`${username}, nice job! You got ${score} out of 3 correct.`);
      }
    }
  }
}

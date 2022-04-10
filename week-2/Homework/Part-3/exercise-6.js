/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS", "React", "Node"],
    class: "Mar1",
    studentLikes: 0,
    job: {
      company: "Google",
      position: "Senior developer",
      city: "Barcelona",
    },
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job: {
      company: "FC Barcelona",
      position: "Player",
      city: "Barcelona",
    },
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React", "Angular", "Python", "Node"],
    class: "Mar4",
    studentLikes: 0,
    job: {
      company: "Facebook",
      position: "Software Manager",
      city: "Chicago",
    },
  },
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML", "JS", "React"],
    class: "Mar2",
    studentLikes: 0,
    job: {
      company: "Amazon",
      position: "Senior developer",
      city: "Barcelona",
    },
  },
];

//YOUR CODE HERE
mentors.forEach((e) => {
  if (e.job.city === "Barcelona" && e.skills.includes("React")) {
    console.log(
      `Hi, my name is ${e.firstName} ${e.lastName}. I work in Barcelona and i know React.`
    );
  }
});

//  const newMentors=mentors.filter(member => member.job.city==="Barcelona" && member.skills.includes("React")).forEach(e =>
//   console.log(`Hi, my name is ${e.firstName} ${e.lastName}. I work in Barcelona and i know React.`))

// Exercise 2
mentors.forEach(e => {
  if (e.job.city === "Barcelona") {
    e.class = "jun1";
    e.skills.push("SQL")
  }
})
//console.log(mentors)
// Exercise 3

  mentors.forEach(e => {
    e.addSkill = function(skill){
      this.skills.push(skill);
    }
    e.addSkill("php")
  })
  //console.log(mentors)

// Exercise 4
 function addSkill(mentors,newSkill){
   mentors.forEach(e => e.skills.push(newSkill))
//   //your code here
 }
 addSkill(mentors,"ruby")
// mentors.function removeSkill(mentors,newSkill){
//   / console.log(mentors)/your code here
// }
function removeSkill(mentors,skillToRemove){
  mentors.forEach(mentor => {mentor.removeSkill(skillToRemove)})
}

removeSkill(mentors, "React")
console.log(mentors)

// 6.

function mentorWithMoreSkills(mentors) {
  const numberOfSkillsPerMentor = mentors.map(mentor => mentor.skills.length);
  const maxOfSkills = Math.max(...numberOfSkillsPerMentor);
  const nameMentorMaxSkilled = mentors.find(mentor => mentor.skills.length === maxOfSkills).firstName;
  return nameMentorMaxSkilled
}

mentorWithMoreSkills(mentors)
console.log(mentorWithMoreSkills(mentors))
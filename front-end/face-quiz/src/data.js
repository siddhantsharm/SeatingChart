/* Feel free to modify any of the data types to what works best with your implementation!
You do not have to work with the data in this format!

classData - contains a list of courses, with each item including:
                  course name, professor, lecture hall location, total room capacity,
                  enrollment as a list of student id numbers, and a list of seats as absolute
                  positioning (CSS left pixels, CSS top pixels)
studentData - contains a list of student objects each containing a student id, name,
              local file path (placeholder for now) to student's image, pronouns (placeholder),
              and a seat id of the student's assigned seat, and whether he/she have an occupied seat.
currentUser - A variable containing the current user.

Notes:
      - the current seats representation as pixels might not be the best solution! Feel free
      to experiment/research different ways to represent a seat
      - pronouns and image file path are simply placeholders (move an image of yourself into
      your project files!)
*/

export const classData = [
    {
    name: "Berkeley Law" ,
    professor: "Devin Jones",
    room: "Lecture Hall 120",
    capacity: 15,
    enrollment: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    seats: [ ["300px", "250px"], ["450px", "250px"], ["600px", "250px"], ["750px", "250px"], ["900px", "250px"],
            ["300px", "400px"], ["450px", "400px"], ["600px", "400px"], ["750px", "400px"], ["900px", "400px"],
            ["300px", "400px"], ["450px", "400px"], ["600px", "400px"], ["750px", "400px"], ["900px", "450px"] ]
    },
    {
    name: "CS 61A" ,
    professor: "John Denero",
    room: "Wheeler Hall 100",
    capacity: 100,
    enrollment: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    seats: [ ["300px", "250px"], ["450px", "250px"], ["600px", "250px"], ["750px", "250px"], ["900px", "250px"],
            ["300px", "400px"], ["450px", "400px"], ["600px", "400px"], ["750px", "400px"], ["900px", "400px"],
            ["300px", "400px"], ["450px", "400px"], ["600px", "400px"], ["750px", "400px"], ["900px", "450px"] ]
    },
  ];

export const currentUser = {
  sid: 123,
  name: "Siddhant Sharma",
  pronouns: "he/him/his",
  img: require('./Photos/test.jpg'),
  classes: ["Berkeley Law", "CS 61A"]       /*added a classes key for the currentUser to test Classes.js*/
}

export const studentData = [

  {
  sid: 10,
  name: "Siddhant Sharma",
  img: require('./Photos/test.jpg'),
  pronouns: "he/his/him",
  seatId: ["100px", "50px"],
  occupied: true
  },

  {
  sid: 2,
  name: "Lara Chu",
  img: require("./Photos/Lara.jpeg"),
  pronouns: "she/her/hers",
  seatId: ["400px", "250px"],
  occupied: true,
  blocked: true
  },






  {
  sid: 4,
  name: "Ethan Lee",
  img: require("./Photos/ethan.png"),
  pronouns: "she/her/hers",
  seatId: ["1000px", "250px"],
  occupied: true,
  blocked: true

  },





  {
  sid: 5,
  name: "Rachel Lee",
  img: require('./Photos/rachel.png'),
  pronouns: "she/her/hers",
  seatId: ["400px", "400px"],
  occupied: true,
  blocked: true

  },



  {
  sid: 6,
  name: "Marcela Siquiera",
  img: require('./Photos/marcela.jpeg'),
  pronouns: "she/her/hers",
  seatId: ["850px", "400px"],
  occupied: true,
  blocked: true

  },



  {
  sid: 7,
  name: "Ebru Odok",
  img: require('./Photos/ebru.jpeg'),
  pronouns: "she/her/hers",
  seatId: ["1150px", "400px"],
  occupied: true,
  blocked: true
  },


  {
  sid: 8,
  name: "Eve Lin",
  img: require("./Photos/eve.png"),
  pronouns: "she/her/hers",
  seatId: ["250px", "550px"],
  occupied: true,
  blocked: true
  },


  {
  sid: 9,
  name: "Kate Li",
  img: require('./Photos/kate.jpeg'),
  pronouns: "she/her/hers",
  seatId: ["550px", "550px"],
  occupied: true,
  blocked: true
  },





{
sid: 1,
name: "Chris Chi",
img: require('./Photos/chris.png'),
pronouns: "she/her/hers",
seatId: ["250px", "250px"],
occupied: true,
blocked: true
},
{
sid: 3,
name: "Agam Jolly",
img: require("./Photos/agam.png"),
pronouns: "she/her/hers",
seatId: ["700px", "250px"],
occupied: true,
blocked: true

}

];
// SID is a primary key and index into list with sid to get student info
// [seat, seat] : SID

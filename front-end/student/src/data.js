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
    link: "/classBl",
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
    link: "/class61A",
    capacity: 100,
    enrollment: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    seats: [ ["300px", "250px"], ["450px", "250px"], ["600px", "250px"], ["750px", "250px"], ["900px", "250px"],
            ["300px", "400px"], ["450px", "400px"], ["600px", "400px"], ["750px", "400px"], ["900px", "400px"],
            ["300px", "400px"], ["450px", "400px"], ["600px", "400px"], ["750px", "400px"], ["900px", "450px"] ]
    },
  ];

export let currentUser = {
  sid: 123,
  name: "Siddhant Sharma",
  pronouns: "he/him/his",
  img: require('./Photos/test.jpg'),
  classes: ["Berkeley Law", "CS 61A"]       /*added a classes key for the currentUser to test Classes.js*/
}

export const users = [
  {
    sid: 1,
    name: "Siddhant Sharma",
    username: "siddhant_sharma",
    pronouns: "he/him/his",
    img: require("./Photos/test.jpg"),
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
  {
    sid: 2,
    name: "Chris Chi",
    username: "chris_chi",
    img: require("./Photos/chris.png"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
  {
    sid: 3,
    name: "Lara Chu",
    username: "lara_chu",
    img: require("./Photos/Lara.jpeg"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
  {
    sid: 4,
    name: "Agam Jolly",
    username: "agam_jolly",
    img: require("./Photos/agam.png"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
  {
    sid: 5,
    name: "Ethan Lee",
    username: "ethan_lee",
    img: require("./Photos/ethan.png"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
  {
    sid: 6,
    name: "Rachel Lee",
    username: "rachel_lee",
    img: require("./Photos/rachel.png"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "admin",
  },
  {
    sid: 7,
    name: "Marcela Siqueira",
    username: "marcela_siqueira",
    img: require("./Photos/marcela.jpeg"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "admin",
  },
  {
    sid: 8,
    name: "Ebru Odok",
    username: "ebru_odok",
    img: require("./Photos/ebru.jpeg"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
  {
    sid: 9,
    name: "Eve Lin",
    username: "eve_lin",
    img: require("./Photos/eve.png"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
  {
    sid: 10,
    name: "Kate Li",
    username: "kate_li",
    img: require("./Photos/kate.jpeg"),
    pronouns: "she/her/hers",
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
  {
    sid: 11,
    name: "Devin Jones",
    username: "devin_jones",
    pronouns: "he/him/his",
    img: require("./Photos/devin.jpeg"),
    classes: ["Berkeley Law"],
    type: "instructor",
  },
  {
    sid: 11,
    name: "Samiya Mehreen",
    username: "samiya_mehreen",
    pronouns: "she/her/hers",
    img: require("./Photos/samiya.png"),
    classes: ["Berkeley Law", "CS 61A"],
    type: "student",
  },
];

export const studentData = [
  {
  sid: 2,
  name: "Chris Chi",
  img: require('./Photos/chris.png'),
  pronouns: "she/her/hers",
  seatId: ["280px", "250px"],
  occupied: true,
  blocked: true
  },
  {
  sid: 1,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["130px", "250px"],
  occupied: false
  },
  {
  sid: 3,
  name: "Lara Chu",
  img: require("./Photos/Lara.jpeg"),
  pronouns: "she/her/hers",
  seatId: ["430px", "250px"],
  occupied: true,
  blocked: true
  },

  {
  sid: 4,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["580px", "250px"],
  occupied: false
  },

  {
  sid: 5,
  name: "Agam Jolly",
  img: require("./Photos/agam.png"),
  pronouns: "she/her/hers",
  seatId: ["730px", "250px"],
  occupied: true,
  blocked: true

  },

  {
  sid: 6,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["880px", "250px"],
  occupied: false
  },

  {
  sid: 7,
  name: "Ethan Lee",
  img: require("./Photos/ethan.png"),
  pronouns: "she/her/hers",
  seatId: ["1030px", "250px"],
  occupied: true,
  blocked: true

  },
  {
  sid: 8,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["1180px", "250px"],
  occupied: false
  },
  {
  sid: 9,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["1330px", "250px"],
  occupied: false
  },

  {
  sid: 10,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["280px", "400px"],
  occupied: false
  },
  {
  sid: 11,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["130px", "400px"],
  occupied: false
  },

  {
  sid: 12,
  name: "Rachel Lee",
  img: require('./Photos/rachel.png'),
  pronouns: "she/her/hers",
  seatId: ["430px", "400px"],
  occupied: true,
  blocked: true

  },

  {
  sid: 13,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["580px", "400px"],
  occupied: false
  },

  {
  sid: 14,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["730px", "400px"],
  occupied: false
  },

  {
  sid: 15,
  name: "Marcela Siquiera",
  img: require('./Photos/marcela.jpeg'),
  pronouns: "she/her/hers",
  seatId: ["880px", "400px"],
  occupied: true,
  blocked: true

  },

  {
  sid: 16,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["1030px", "400px"],
  occupied: false
  },

  {
  sid: 17,
  name: "Ebru Odok",
  img: require('./Photos/ebru.jpeg'),
  pronouns: "she/her/hers",
  seatId: ["1180px", "400px"],
  occupied: true,
  blocked: true
  },
  {
  sid: 18,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["1330px", "400px"],
  occupied: false
  },

  {
  sid: 19,
  name: "Eve Lin",
  img: require("./Photos/eve.png"),
  pronouns: "she/her/hers",
  seatId: ["280px", "550px"],
  occupied: true,
  blocked: true
  },
  {
  sid: 20,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["130px", "550px"],
  occupied: false
  },

  {
  sid: 21,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["430px", "550px"],
  occupied: false
  },

  {
  sid: 22,
  name: "Kate Li",
  img: require('./Photos/kate.jpeg'),
  pronouns: "she/her/hers",
  seatId: ["580px", "550px"],
  occupied: true,
  blocked: true
  },

  {
  sid: 23,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["730px", "550px"],
  occupied: false,
  },

  {
  sid: 24,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["880px", "550px"],
  occupied: false
  },

  {
  sid: 25,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["1030px", "550px"],
  occupied: false
  },

  {
  sid: 26,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["1180px", "550px"],
  occupied: false
  },
  {
  sid: 27,
  name: null,
  img: require('./Photos/chris.png'),
  pronouns: null,
  seatId: ["1330px", "550px"],
  occupied: false
  },
  {
  sid: 28,
  name: "Siddhant Sharma",
  img: require('./Photos/test.jpg'),
  pronouns: "he/his/him",
  seatId: ["130px", "50px"],
  occupied: true
  }

];
// SID is a primary key and index into list with sid to get student info
// [seat, seat] : SID

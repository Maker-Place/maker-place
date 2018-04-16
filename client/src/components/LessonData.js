// stub data until talking to API
// usage:
// import {getLessonByTitle, getAllLessons} from '../LessonData';
// let classes = getAllLessons();
// let rollerbladingClass = getLessonByTitle('Rollerblading');

// Add class data fields here:
// "title": "This is the title",
//"Date": "date",
//"Time": "time

const ALL_LESSONS = [{
    title: "This is the title1",
    startdate: "",
    starttime: "time1",
    location: "miramesa",
    registerLink: "",
    category: "SOS - Shop Orientation",
    registrationOptions: "Robotics Club – $15.00",
    image_url: 'https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/51/14/200268591-001.jpg',
    description: `Welcome to MakerPlace! This class is the first step on your journey to become a 
    bona-fide MakerPlace member. Shop Orientation covers all the important information you’ll need to know as a new member- 
    from general shop safety and member rules, to other hot topics like project storage, machine reservations, and local sources for materials. `,
    classTimes: [
      'classtime 1',
      'classTime 2',

      'classTime 2',


    ]
  },
  {
    title: "This is the title2",
    startdate: "date2",
    starttime: "time2",
    location: "miramesa",
    registerLink: "",
    category: "",
    registrationOptions: "Robotics Club – $15.00",
    image_url: 'https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/51/14/200268591-001.jpg',
    description: `Welcome to MakerPlace! This class is the first step on your journey to become a 
    bona-fide MakerPlace member. Shop Orientation covers all the important information you’ll need to know as a new member- 
    from general shop safety and member rules, to other hot topics like project storage, machine reservations, and local sources for materials. `
  },

  // title: 'Rollerblading',
  // image_url: 'https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/51/14/200268591-001.jpg',
  // description: 'HERE IS MY ROLLERBLADING CLASS DESCRIPTION!',
  // time: '4pm-5am',
  // date: 'April 20th - May 5th'
  // Add new class properties here (make sure to add to every object in this array)/
  // something: 'blah'
  {
    // After adding the data, make sure you are getting it from props and rendering properly in ClassCard
    title: "This is the title5",
    date: "date5",
    time: "time5",
    image_url: 'https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/51/14/200268591-001.jpg'

  },
  {
    title: "This is the title6",
    date: "date6",
    time: "time6",
    image_url: 'https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/51/14/200268591-001.jpg'
  },
  {
    title: "This is the title7",
    date: "date7",
    time: "time7",
    image_url: 'https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/51/14/200268591-001.jpg'
  },

  {
    title: "This is the title8",
    date: "date8",
    time: "time8",
    image_url: 'https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/51/14/200268591-001.jpg'
  },
  // Add new lessons here:
];

const Registration = [{
  memberregistration: ""
}]

// basic stub data access layer
export function getAllLessons() {
  return ALL_LESSONS;
}

export function getLessonByTitle(title) {
  return ALL_LESSONS.find((lesson) => {
    return (lesson.title === title);
  });
}
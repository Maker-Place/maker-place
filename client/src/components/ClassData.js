// stub data until talking to API 
// usage:
// import {getClassByTitle, getAllClasses} from '../ClassData';
// let classes = getAllClasses();
// let rollerbladingClass = getClassByTitle('Rollerblading');

// Add class data fields here:

const ALL_CLASSES = [
    {
    title: 'Pottery',
    description: 'Welcome to MakerPlace! This class is the first step on your journey to become a bona-fide MakerPlace member. '
    },
    {
      title: 'Welding',
    },
    {
      title: 'Bongmaking',
    },
    {
      title: 'Kungfu',
    },
    {
      title: 'Rollerblading',
      image_url: 'https://img-aws.ehowcdn.com/560x560/photos.demandstudios.com/getty/article/51/14/200268591-001.jpg',
      description: 'HERE IS MY ROLLERBLADING CLASS DESCRIPTION!',
      time: '4pm-5am',
      date: 'April 20th - May 5th'
      // Add new class properties here (make sure to add to every object in this array)/
      // something: 'blah'
      // After adding the data, make sure you are getting it from props and rendering properly in ClassCard
    }
    // Add new classes here:
  ];



  // basic stub data access layer
  export function getAllClasses () {
    return ALL_CLASSES;
  }

  export function getClassByTitle (title) {
    return ALL_CLASSES.find((c)=> {
      return (c.title === title);
    });
  }
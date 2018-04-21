// const db = require("../models");
// var scrape = require("../scripts/scrape.js");

// // Defining methods for the booksController
// module.exports = {
//   scrapeClasses: function(req, res) {
//     // scrape has a callback function that will send back classData and a boolean of weather it's done
//     return scrape(function(classData, done) {
//       if (classData.url) {
//         db.Class.find({"url": classData.url}).limit(1)
//         .then(function(found) {
//           if (!found.length) {
//             console.log('not found');
//             db.Class.create(classData)
//               .then(function(classAdded) {
//                 {
//                   console.log("added " + classAdded.id);
//                   console.log(done);
//                   if (done) {
//                     res.json('done');
//                   }
//                 }
//              })
//              .catch(function(err) {
//                    console.log("------------------------------------------------------------------------------");
//                    console.log(err);
//              });
//           } else {
//             console.log("in the db", done);
//             if (done) {
//               res.json('done');
//             }
//           } 
//         });
//       } else {
//         if (done) {
//           res.json('done');
//         }
//       }
//     })
//   }
// };

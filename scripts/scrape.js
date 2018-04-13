var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

module.exports = function(req, res) {
	
  // First, we grab the body of the html with request
	axios.get("http://makerplace.com/classes").then(function(response) {
	    // Then, we load that into cheerio and save it to $ for a shorthand selector
	    var $ = cheerio.load(response.data);
	    var links = [];
	    
	    var article = $("#id_MenuGadget_idMainMenu1208398").find("a").each(function(i,element) {
	    	// add each link in the menu to the array
	    	links.push({
	    		category: $(this).html(),
	    		link: $(this).attr("href")
	    	});
	    });

	    var count = 0;
	    getCategory(count);
		
		// follow the link and get the list of classes
	    function getCategory(count) {
	    	let category = links[count].category;

			axios.get(links[count].link)
			.then(function(response) {
				
				// the category page
				var $ = cheerio.load(response.data);

				getClasses($, count).then(function(response){

					let classes = response;

					for (var i = 0; i < classes.length; i++) {
						classes[i].category = category;
					};
					
					// can't figure out how to hit the controller route without absolute path

					// console.log(classes);
					// axios.post("http://localhost:3000/api/classes", classes)
					// .then(function(response) {
					// 	console.log("api/classes");
					// 	console.log(response.data);
					// })
					// .catch(function(err) {
					// 	console.log(err);
					// })

					db.Class.create(classes)
			    	.then(function(dbArticle) {
			        	// View the added result in the console
			        	console.log(dbArticle);
			    	})
			    	.catch(function(err) {
			       		console.log("------------------------------------------------------------------------------");
			       		console.log(err);
			    	});
					
				});

				count++;
				if (count < links.length) {
					getCategory(count);
				} else {
					res.json(links);
				}


	    	})
	    	.catch(function(err) {
	    		console.log(err);
	    		res.json(err);
	    	})
	    }

		let getClasses = ($, count) => new Promise(
			(resolve,reject) => {
				var classLinks = [];

				$(".eventModuleItem").each(function(i,element) {

					var link = $(this).find(".itemTitleContainer").find("a").attr("href");
					if (!classLinks.includes(link)) {
						classLinks.push(link);
					}

				});


				let classCount = 0,
				classes = [];

				getClassData(classCount) // need to wait for this to finish to get all class data before running getClasses
				
				function getClassData(count) {

					
					if (classLinks[count]) {
						axios.get(classLinks[count])
						.then(function(response) {
							var $ = cheerio.load(response.data);

							var title = $(".SystemPageTitle").html().trim();
							var startDate = $(".eventInfoStartDate").children(".eventInfoBoxValue").children("strong").html();
							var endDate = $(".eventInfoEndDate").children(".eventInfoBoxValue").children("span").html();
							var startTime = $(".eventInfoStartTime").children(".eventInfoBoxValue").children("span").html();
							var schedule = $(".eventInfoSession").html();
							var location = $(".eventInfoLocation").children(".eventInfoBoxValue").children("span").html();
							var spacesLeft = $(".eventInfoSpacesLeft").children(".eventInfoBoxValue").children("span").html();
							var classTimes = [];
							var registrationOptions = [];
							// not getting data
							var registerLink = $(".boxActionContainer .inner a").attr("href");

							var description = $(".gadgetEventEditableArea").html();

							//strip out the html
							description = description.replace(/<(?:.|\n)*?>/gm, '');
							//replace any number of spaces at the beginning of the string with an open <p> tag
							description = description.replace(/^[\s\r\t\n]*/, '<p>');
							//replace any number of spaces at the end of the string with a close </p> tag
							description = description.replace(/[\s\r\t\n]*$/, '</p>');
							// replace &#xA0; with a space
							description = description.replace(/(&#xA0;)/g, ' ');
							// replace any two or more white space characters with a close and open p tag
							description = description.replace(/[\s\r\t\n]{2,}/g, '</p><p>');
							
							$(".eventInfoSession").each(function(i, element){
								var data = $(this).find("span").html();
								classTimes.push(data);
							});

							$(".regTypeLiLabel").each(function(){
								var data = $(this).find("strong").html();
								registrationOptions.push(data);
							})

							classes.push({
								title,
								startDate,
								endDate,
								startTime,
								location,
								spacesLeft,
								schedule,
								classTimes,
								registrationOptions,
								registerLink,
								description
							});

							count++;
							if (count < classLinks.length) {
								getClassData(count)
							} else {
								resolve(classes);
							}
						})
						.catch(function(err) {
							console.log(err);
						})
					}
		    	}
			}
		);
	
	});
}
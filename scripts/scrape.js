var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

//addToDB is the callback passed from Fetch.js
var scrape = function(addToDB) {
	console.log("scraping");
	
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
	    	let lastCategory = false;

			axios.get(links[count].link)
			.then(function(response) {
				
				// the category page
				var $ = cheerio.load(response.data);
				
				//increment categories and check if we're done
				count++;
				if (count < links.length) {
					getCategory(count);
				} else {
					lastCategory = true;
				}
				// passing the cheerio data, category, lastCatogry Boolean, and callback function addTo DB
				getClasses($, category, lastCategory, addToDB);
				
	    	})
	    	.catch(function(err) {
	    		console.log(err);
	    		res.json(err);
	    	})
	    }

		function getClasses($, category, lastCategory, cb) {
			var classLinks = [];
			
			//get all the class links
			$(".eventModuleItem").each(function(i,element) {
				var link = $(this).find(".itemTitleContainer").find("a").attr("href");
				if (!classLinks.includes(link)) {
					classLinks.push(link);
				}
			});

			let count = 0,
			lesson = {};

			getClassData(count);
			
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
						var url = classLinks[count];
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

						lesson = {
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
							description,
							url,
							category
						};

						count++;
						//if there are more classes, send the lesson and false (for not done) and run the function again
						if (count < classLinks.length) {
							cb(lesson, false);
							getClassData(count);
						} else {
							//if it's the last class
							//only send done if it's also the last category
							cb(lesson, lastCategory);
						}
					})
					.catch(function(err) {
						console.log(err);
					})
				} else {
					//if there are no classes, check if last category
					cb({},lastCategory);
				}
	    	}
		}
		
	});
}

module.exports = scrape;
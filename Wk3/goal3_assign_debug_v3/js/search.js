
//Vincent Arick - PWA1 - October 2014


// Create privatized scope using a self-executing function
(function(){//main function

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),//set variable "results"
		searchInput = document.forms[0].search,//set variable searchInput, returning form search: added semicolon
		currentSearch = ""// variable currentSearch not defined: added semicolon, changed to double quotations
	;

	// Validates search query
	var validate = function (query){// defining validqte as a function: corrected validate spelling, replaced double equal to one equal

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){//loop query 0 = to undefined, added 2 equal signs
			query = query.substring(1, query.length);//query = query substring
		};
		while (query.charAt(query.length - 1) === ""){//loop query -1 undefined equal to input
			query = query.substring(0, query.length - 1);//query equals
		};//fixed closure error - added curly brace

		// Check search length, must have 3 characters
		if (query.length < 3) {//if search is less then 3 characters
			alert("Your search query is too small, try again."); // alert search is to short, try again: added end quotation

				// (DO NOT FIX THE LINE DIRECTLY BELOW)
				searchInput.focus();//search input focus
				return;//loop back to query input
			};// fixed curly braces
			
			search(query);//search again for query
		};
		
	// Finds search matches
	var search = function (query) { // declaring variable search equal function query fixed error adding curly brace

			// split the user's search query string into an array
			var queryArray = query.join("");//variable array equal query join

			// array to store matched results from database.js
			var results = [];//variable result equals matched result

			// loop through each index of db array
			for (var i = 0, j = db.length; i < j; i++) {//loop variable equal 0, j equals database length: 0<database length add 1

				// each db[i] is a single video item, each title ends with a pipe "|"
				// save a lowercase variable of the video title
				var dbTitleEnd = db[i].indexOf('|');//variable database 0 seperated by pipe
				var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);

				// loop through the user's search query words
				// save a lowercase variable of the search keyword
				for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {//loop variable ii=0, jj=queryArray; if ii<jj add 1
					var qitem = queryArray[ii].toLowerCase();//variable qitem equal

					// is the keyword anywhere in the video title?
					// If a match is found, push full db[i] into results array
					var compare = dbitem.indexOf(qitem);//variable compare equal database index item
					if (compare !== -1) {//if variable compare does not equal -1
						results.push(db[i]);//result push database

					};

				};//added semicolon
			};//added semicolon

				results.sort();//sort result

				// Check that matches were found, and run output functions
				if (results.length = 0) {//if result doesn't equal 0
					noMatch();//no match
				} else {//else
					showMatches(results);//show result
				};
			};
/////////////
			// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
			var noMatch = function () {//variable no match function
				var html = ("") + //variable html equals undefined plus paragraphs
						'<p>No Results found.</p>' +//paragraph No Results Found
						'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//paragraph try searching
				resultsDIV.innerHTML = html;//result innerHTML
			};

			// Put matches into page as paragraphs with anchors
			var showMatches = function (results) {//variable showMatch function

				// THE NEXT 4 LINES ARE CORRECT.
				var html = '<p>Results</p>',//Result in html paragraph
					title,
					url
				;

				// loop through all the results search() function
				for (var i=0, j=results.length; i < j; i++) {//loop variable results.length

					// title of video ends with pipe
					// pull the title's string using index numbers
					titleEnd = results[i].indexOf('|');//result name variable titleEnd
					title = results[i].subString(0, titleEnd);//title = result titleEnd

					// pull the video url after the title
					url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);//pull video url

					// make the video link - THE NEXT LINE IS CORRECT.
					html += '<p><a href=' + url + '>' + title + '</a></p>';//make video link
				};
				resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
			};

			// The onsubmit event will be reviewed in upcoming Course Material.
			// THE LINE DIRECTLY BELOW IS CORRECT
			document.forms[0].onsubmit = function () {//submit function
				var query = searchInput.value;// variable query equal searchInput
				validate(query);//validate query, corrected validate misspelling

				// return false is needed for most events - this will be reviewed in upcoming course material
				// THE LINE DIRECTLY BELOW IS CORRECT
				return false;//added semicolon
			};//end loop

})();
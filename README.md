# Meta-Course-Project
JESUS IS KING! and this project exists simply to glorify the name of Jesus.


## Tech Stack
- React (with vite)
- Javascript
- HTML
- CSS
- npm
- EsLint


## How it works
1) Narrow down the type of quote a user is looking for based off of emotion/type and bible testament they selected
2) Filter the available hardcoded quote references for a random but single reference to a quote matching user expectation
3) Fetch the quote from a 3rd party API (https://bible-api.com/)
4) Display the reference and the full quotation to the user

### Considerations
- The httpGet method found in the HttpService.js file is setup to timeout after 5 seconds in order to address situations of poor/no internet connectivity and failure to complete fetching a quote
- If a timeout occurs, an apologetic message will be displayed to the user prompting them to try again
- All quote references used for filtering are manually hardcoded, so adding new quotes or categories currently requires updating the bibleQuotes variable within the BibleService.js file
- The project depends on a 3rd party API (https://bible-api.com/) which could affect project performance or functionality if it's removed in the future with no fallback system implemented


## Getting started
To start the project:
	1) Ensure npm version 22.13.0 is being used
	2) Run "npm install" from your terminal in the root project directory
	3) Upon completion, start the projet using "npm run dev"

Deploying to Github Pages:
	1) Please ensure all your commits are made and features are fully built aswell as tested
	2) Run "npm run deploy" from the terminal


## License
MIT


## The Author
Micah Hack currently resides in Poland and can be connected with on the below socials:

- Micah.Hack.18@gmail.com
- https://www.linkedin.com/in/micah-hack-5093a5342/
- https://github.com/MicahHack


## Future Additions
- Stripe for donations
- Additional types
- Additional quotes
- Consider adding an option to filter by book

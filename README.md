# Notes App (Node.js Exploration)

## Description
* This is a basic note-taking app that I built to explore the fundamentals of Node.js.
* The app uses basic features from Node.js like the ability to read and write from the file system.
* It also utilizes third-party Node.js libraries, like Yargs and Chalk.

## Built With
* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
* [Yargs](https://www.npmjs.com/package/yargs) - a Node.js library for building interactive command line tools
* [Chalk](https://www.npmjs.com/package/chalk) - a Node.js module that allows you to add styles to your terminal output
	
## Functionality
This note-taking app allows you to ```add```, ```remove```, ```list```, and ```read``` your notes.
* Add note: 
```node app.js add --title="title note" --body="note body here"```
* Remove note: 
```node app.js remove --title="note title here"```
* Read note: ```node app.js read --title="note title here"```
* List all notes: ```node app.js list```

## Preview
<img src="/notes_preview.png" alt="notes app" width="840"/>

# Notes App (Node.js Exploration)

This is a basic note-taking app that I built to explore the fundamentals of Node.js.

## About
* This note-taking app uses basic features from Node.js like the ability to read and write from the file system.
* It also utilizes third-party Node.js libraries, like Yargs and Chalk.
	
## Functionality
This note-taking app allows you to ```add```, ```remove```, ```list```, and ```read``` your notes.
* Add note: 
```node app.js add --title="title note" --body="note body here"```
* Remove note: 
```node app.js remove --title="note title here"```
* Read note: ```node app.js read --title="note title here"```
* List all notes: ```node app.js list```

## Usage
### Add a note
```
node app.js add --title="title note" --body="note body here"
```

### Remove a note
```
node app.js remove --title="note title here"
```

### Read a note
```
node app.js read --title="note title here"
```

### List all the notes
```
node app.js list
```

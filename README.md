# Authentication App

## Features

* Node.js
* Vue

### Node.js Stack

- Express server
- Forever
- Nodemon

### Vuejs Stack

- Vue@2.5.2
- Vue Router@3.0.1

## Getting started

### Backend set up
1. Install all backend dependencies
```bash
$ cd backend && npm install
```

2. Make logs directory for loggin backend server
```bash
# Directory: /backend
$ mkdir logs && cd logs && touch err.log & touch forever.log & touch out.log 
```

3. Serve the app
```bash
$ node ./bin/www
```

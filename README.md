# Authentication App

## Features

* Node.js
* Vue

### Node.js Stack

- Mysql
- Express server
- Forever
- Nodemon

### Vuejs Stack

- Vue@2.5.2
- Vue Router@3.0.1

### Features
* ---------- **Essentials** ----------
* [x] Seperate frontend and backend server

* ---------- **Backend server** ----------
* [x] Signin
* [x] Signup
* [x] Signout
* [ ] JWT authenticate

* ---------- **Frontend server** ----------
* [ ] Authenticate handling

## Getting started

### Backend set up
1. Setting database

```sql
CREATE TABLE `users` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `password` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
```

2. Install all backend dependencies
```bash
$ cd backend && npm install
```

3. Make logs directory for loggin backend server
```bash
# Directory: /backend
$ mkdir logs && cd logs && touch err.log & touch forever.log & touch out.log 
```

4. Serve the app
```bash
$ node ./bin/www
```

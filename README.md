# Authentication App

### Node.js Stack

- Mysql
- Express server
- Forever
- Nodemon
- Redis

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
* [x] JWT authenticate
* [ ] Store refresh token in redis
* [ ] Read logic with permission
* [ ] Create logic with permission
* [ ] Delete logic with permission
* [ ] Update logic with permission
* ---------- **Frontend server** ----------
* [ ] handling jwt token with vuex
* [ ] handling Authenticate
- * [ ] Signup
- * [ ] Signin
- * [ ] Signout
* [ ] management toast popup about server's response

## Getting started
1. install module
```bash
# install frontend
$ cd frontend
$ npm install
```

### Frontend set up
1. install module
```bash
# install frontend
$ cd frontend
$ npm install
```
2. start frontend server
```bash
$ npm start
```



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
) ENGINE=InnoDB AUTO_INCREMENT=8;

CREATE TABLE boards (
    `index` INT(11) NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(50) NOT NULL,
    `upk` INT(11) NOT NULL,
    `content` MEDIUMTEXT NOT NULL,
    `regdate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`index`)
)
COLLATE='utf8_general_ci' ENGINE=InnoDB AUTO_INCREMENT=1;
```

2. Start redis cli server on background
```bash
$ redis-server &
```
2. Install all backend dependencies
```bash
$ cd backend && npm install
```

3. Edit database.config.js 
```bash
$ vi backend/config/database.config.js

# After that setting git command
$ git update-index --assume-unchanged backend/config/database.config.js
```

4. Make logs directory for loggin backend server
```bash
# Directory: /backend
$ mkdir logs && cd logs && touch err.log & touch forever.log & touch out.log 
```

5. Serve the app
```bash
$ node ./bin/www
```

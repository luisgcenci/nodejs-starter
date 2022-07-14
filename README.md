<style>
responseType{
    display: inline-block;
    color: #002947;
    font-size: 12px;
    margin-left: 0.5em;
    padding: 0.2em 0.5em;
    border-radius: 2px;
    border: 1px solid #e9eef3;
    background-color: #fbfbfc;
    font-family: courier new,courier,monospace;
}
</style>

# NodeJS Backend App - Starter
NodeJS app on express framework backed by a MongoDB database following MVC pattern. Includes User Model with CRUD services, as well basic signin/signup endpoints.

# Minimum Dependencies
[NodeJS](https://nodejs.org/en/download/) \
[MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/) \
[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

# Set Up
### Clone this repo 
```https://github.com/luisgcenci/signup-login-nodejs-backend-app.git```
### Install Dependencies
```yarn install```

### Open .env file and insert mongodb uri and replace TOKEN_KEY with a random string.

> TOKEN_KEY is used to create JWT Auth.
```
MONGO_URI="mongodb+srv://username:password@databasename.bmpbw.mongodb.net/?retryWrites=true&w=majority"
TOKEN_KEY="RANDOMSTRING"
```

### How to Run
```node server.js```

# Endpoints
### **URL**: `/api/v1/users/signup`

**Method** : `POST`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password"
}
```

## Success Response

**Code** : `201 OK` 

Returns JWT Auth Token
<responseType>application/json</responseType>

**Content example**

```json
{
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjZjliZThmM2MyYTM0NDdlMjEwMjc3IiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3NzczMDMyLCJleHAiOjE2NTc3ODAyMzJ9.2avOPBKgWKcLYdmjs6z5j8Yr8rgi4GossoFyLC6pEg0"
}
```
---
<br />

### **URL**: `/api/v1/users/signin`


**Method** : `POST`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password"
}
```

## Success Response

**Code** : `201 OK`

Returns JWT Auth Token
<responseType>Application JSON</responseType>

**Content example**

```json
{
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjZjliZThmM2MyYTM0NDdlMjEwMjc3IiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3NzczMDMyLCJleHAiOjE2NTc3ODAyMzJ9.2avOPBKgWKcLYdmjs6z5j8Yr8rgi4GossoFyLC6pEg0"
}
```
---
<br />

### **URL**: `/api/v1/users/updateusername`

**Method** : `POST`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password",
    "newUsername": "newUsername"
}
```

## Success Response

**Code** : <responseCode>201 OK</responseCode>

Returns user object
<responseType>Application JSON</responseType>

**Content example**

```json
{
    "_id": "62cf9be8f3c2a3447e210277",
    "username": "newUsername",
    "password": "$2a$10$Z9XNnzvPA77VnggiEtE9juJvFNXFbVVMtSrhNJTPDfpKLM2jF/keO",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjZjliZThmM2MyYTM0NDdlMjEwMjc3IiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3NzczMDMyLCJleHAiOjE2NTc3ODAyMzJ9.2avOPBKgWKcLYdmjs6z5j8Yr8rgi4GossoFyLC6pEg0",
    "__v": 0
}
```
---
<br />

### **URL**: `/api/v1/users/updatepassword`

**Method** : `POST`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password",
    "newPassword": "newPassword"
}
```

## Success Response

**Code** : <responseCode>201 OK</responseCode>

Returns user object
<responseType>Application JSON</responseType>

**Content example**

```json
{
    "_id": "62cf9be8f3c2a3447e210277",
    "username": "username",
    "password": "newPasswordHashed",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjZjliZThmM2MyYTM0NDdlMjEwMjc3IiwidXNlcm5hbWUiOiJyb290IiwiaWF0IjoxNjU3NzczMDMyLCJleHAiOjE2NTc3ODAyMzJ9.2avOPBKgWKcLYdmjs6z5j8Yr8rgi4GossoFyLC6pEg0",
    "__v": 0
}
```
---
<br />

### **URL**: `/api/v1/users/deleteuser`

**Method** : `DELETE`

**Auth required** : NO

**Data Params (Body)**

```json
{
    "username": "username",
    "password": "password"
}
```

## Success Response

**Code** : <responseCode>201 OK</responseCode>

Returns the count of users deleted.
<responseType>Application JSON</responseType>

**Content example**

```json
{
    "deletedCount": 1
}
```

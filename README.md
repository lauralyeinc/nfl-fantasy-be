## Contributors
|                                       [Tiffany Simionescu](https://github.com/tiffany-simionescu)                                        |                                       [Joshua Doan](https://github.com/doanmade)                                        |                                       [Laura Theimer](https://github.com/lauralyeinc)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | 
|                      [<img src="https://avatars3.githubusercontent.com/u/42684183?s=460&u=6350285357ccb2175cd8b98b2fbd951c27e35b89&v=4" width = "200" />](https://github.com/tiffany-simionescu)                       |                      [<img src="https://ca.slack-edge.com/ESZCHB482-W012JHQ0T2N-48b400e3487b-512" width = "200" />](https://github.com/doanmade)                       |                      [<img src="https://avatars1.githubusercontent.com/u/52268790?s=460&v=4" width = "200" />](https://github.com/lauralyeinc)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tiffany-simionescu)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/doanmade)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lauralyeinc)            |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tiffanysimionescu/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/5f7dba5298cf7e9c49c4/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/nfl-fantasy-be/maintainability)



# API Documentation

#### 1️⃣ Backend delpoyed at [Heroku](https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework

-    PostgreSQL is much larger in size compared to Sqlite
-    PostgreSQL supports almost every data type
-    PostgreSQL has a larger storage capacity compared to Sqlite
-    PostgreSQL can handle multiple users at once
-    PostgreSQL was used for production
-    Sqlite3 was used for testing and development

## 2️⃣ Endpoints

#### Player Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/players` | all fans      | Returns all the players and their information. |
| GET    | `/api/players/:id` | all fans         | Returns the information for a single player            |
| GET    | `/api/players/fan/:id` | owners         | Returns all saved players for a single Fan                      |
| POST   | `/api/players` | owners         | Adds a player to a Fan's account                      |
| PUT    | `/api/players/:id` | owners         | Moves a player to a new team in the Fan's account                      |
| DELETE | `/api/players/:id` | owners         | Removes a player from a Fan's account                    |

#### Fan Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/fans` | owners      | Returns all fans. |
| GET    | `/api/fans/:id` | owners       | Returns a single Fan           |
| POST   | `/api/fans/register` | all fans         | Registers a new Fan                      |
| POST   | `/api/fans/login` | all fans         | Login for a Fan                      |
| PUT    | `/api/fans/:id` | owners         | Updates a Fan's account                     |
| DELETE | `/api/fans/:id` | owners         | Removes a Fan's account                    |

# Data Model

#### 2️⃣ PLAYERS

---

```
{
  id: UUID
  playerID: STRING
  playerFirst: STRING
  playerLast: STRING
  playerFull: STRING
  position: STRING
  startYear: INTEGER
  currentTeam: STRING
  height: INTEGER
  weight: INTEGER
  dob: DATE
  forty: DECIMAL
  bench: INTEGER
  vertical: DECIMAL
  broad: INTEGER
  shuttle: DECIMAL
  cone: DECIMAL
  arm: DECIMAL
  hand: DECIMAL
  dpos: DECIMAL
  col: STRING
  dv: STRING
  jnum: INTEGER
  dcp: INTEGER
}
```

#### FANS

---

```
{
  fan_id: UUID
  username: STRING
  password: STRING
  email: STRING
  first_name: STRING
  last_name: STRING
  city: STRING
  state: STRING
}
```

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.

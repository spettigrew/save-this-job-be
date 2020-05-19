🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### Code Climate

[![Maintainability](https://api.codeclimate.com/v1/badges/fb3f5b13a4e14009a587/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/job-book-be/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/fb3f5b13a4e14009a587/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/job-book-be/test_coverage)

#### 1️⃣ Backend delpoyed at [Heroku](https://dashboard.heroku.com/apps) <br>

## 1️⃣ Getting started

To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **npm install** to install all required dependencies
- **npm server** to start the local server
- **npm test** to start server using testing environment

### Backend framework Sqlite3 (Development) PostgreSQL(Production)

🚫 Why did you choose this framework?

- Point One
- Point Two
- Point Three
- Point Four

## 2️⃣ Endpoints

#### Base URL https://staging-save-this-job.herokuapp.com/

#### Job posts Routes

| Method | Endpoint               | Access Control | Description                                   |
| ------ | ---------------------- | -------------- | --------------------------------------------- |
| GET    | `/users/jobs`          | User logged in | Returns all job posts for that user.          |
| POST   | `/users/addJob`        | User Logged in | Adds job to User profile                      |
| DELETE | `/users/removeJob/:id` | User Logged in | Delete a Job Post                             |
| PUT    | `/users/updateJob/:id` | User logged in | Updates a job for the logged in user.         |
| GET    | `/users/columns`       | User logged in | Returns column titles for the logged in user. |

#### Tags Routes

| Method | Endpoint                    | Access Control | Description                                  |
| ------ | --------------------------- | -------------- | -------------------------------------------- |
| GET    | `/users/tags`               | User logged in | Returns all job tags for that user.          |
| POST   | `/users/tags/addTag/:id`    | User Logged in | Adds tag to job on User profile              |
| DELETE | `/users/tags/removeTag/:id` | User Logged in | Delete a tag from job post                   |
| PUT    | `/users/tags/updateTag/:id` | User logged in | Updates a tag for the logged in user.        |

#### Tasks Routes

| Method | Endpoint                      | Access Control | Description                                   |
| ------ | ----------------------------- | -------------- | --------------------------------------------- |
| GET    | `/users/tasks/:jobId`         | User logged in | Returns all tasks for the job of the user.    |
| GET    | `/users/tasks/:jobId/:taskId` | User logged in | Returns one task for the job of the user.     |
| POST   | `/users/tasks/:jobId/addTask` | User Logged in | Adds task to job on User profile              |
| PUT    | `/users/tasks/:jobId/:taskId` | User logged in | Updates a task for the logged in user.        |
| DELETE | `/users/tasks/:taskId`        | User Logged in | Delete a task from job post                   |

# Data Model

#### USERS

---

```
{
  id: UUID
  firstName: STRING
  lastName: STRING
  email: STRING
}
```

#### Job posts

---

```
{
  id: UUID
  jobTitle: STRING
  url: STRING
  users_id: STRING
}
```

## 2️⃣ Actions

#### Users

`find()` -> Returns all users, if no param.

`findBy(filter)` -> Returns a user by filter(choice)

`add(user)` -> Creates a user

`findById(email)` -> Finds a user by email.

#### Job posts

`findJob()` -> Retuns all Jobs

`findJobById(id)` -> Returns a Job post by Job id

`addJob(job, id)` -> Add a Job

`findJobByUser(users_id)` -> Finds all users Jobs.

`removeJob(id)` -> Deletes a Job

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app

_ STAGING_DB - optional development db for using functionality not available in SQLite
_ NODE\*ENV - set to "development" until ready for "production"

- JWT*SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-_=+)') for i in range(50)])
  _ SENDGRID_API_KEY - this is generated in your Sendgrid account \* stripe_secret - this is generated in the Stripe dashboard

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

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

# Django + ReactJS + GraphQL CRM

### By: Stuart Leitch

Crash-course in using GraphQL. All this in under 48 hours. 

Django is used on the backend, with React on the front. GraphQL is used as the API over REST.

Site is deployed live on Heroku: https://dgrc.herokuapp.com.

It has protected views for the dashboard, customer create, and view customer pages.

Current issues to solve:
* No request interceptor is in use which will manage the token refreshment process. So every few minutes, the user has to log back in as the token expires.
* Using local storage to store the token when should be using cookies. 
* The "add meeting" to client functionality is incomplete.
* Frontend design is lacking!
* The homepage is currently unused.
* There is next to no input sanitization.
* Logging out is just deleting the token in local storage. That'd change when cookies are used.
* Whitenoise serving as it's on Heroku. Should be swapped for a proper CDN at some point.
* Heroku deployment is of course not working right.
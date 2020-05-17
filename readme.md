# MERN stack

### Project created based on tutorial

https://www.udemy.com/course/mern-stack-front-to-back/

## 1. Basic server setup (006)

> Run inside project's folder

`git init`<br>
`touch .gitignore`<br>
`echo node_modules > .gitignore`<br>
`touch readme.md`<br>
`npm init`<br>
`npm install express`<br>
`npm install mongoose`<br>
`npm install passport`<br>
`npm install passport-jwt`<br>
`npm install jsonwebtoken`<br>
`npm install body-parser`<br>
`npm install bcryptjs`<br>
`npm install validator`<br>
`npm install --save-dev nodemon`<br>

> Add scripts in package.json file

`"start": "node server.js"`<br>
`"server": "nodemon server.js"`<br>

> Run server on localhost:5000

`npm run server`<br>

## 2. Connect to MongoDB (007)

> Add connection to MongoDB using mongoose

## 3. Add routes with express router (008)

> Add routes/api files and use express router

## 4. Create User model (009)

> Create User Schema for MongoDB

## 5. Add user registration (010)

> Create user registration logic

## 6. Email password login (011)

> Add user email and password check

## 7. Create the JWT (012)

> Create the JWT (JSON Web Token)

## 8. JWT authentication (013)

> Add JWT authentication with passport strategy

## 9. Username validation (014)

> Add validation of username when registering

## 10. Login/registration validation (015)

> Add further validation of registration and login information

## 11. Create Profile model (017)

> Create Profile Schema for MongoDB

## 12. Current user profile route (018)

> Create current user profile route

## 13. Create or update profile (019)

> Add create or update profile routes

## 14. Profile validation (020)

> Add validation of profile fields

## 15. More profile API routes (021)

> Create API routes to get profile info (all profiles, by handle, by ID)

## 16. Experience and education routes (022)

> Create experience and education API routes with validation

## 17. DELETE routes (023)

> Create user/profile/experience/education DELETE routes

## 18. Create Post model (024)

> Create PostSchema for posts

## 19. Add post API route (025)

> Create POST route for post creation with validation

## 20. Add more post routes (026)

> Create GET, DELETE routes for posts

## 21. Add post like/unlike routes (027)

> Create POST routes for liking/unliking post

## 22. Add comment routes (028)

> Create POST and DELETE routes for post comments

## 23. Implementing React, setting up assets (030/031)

> Run inside project's folder

`npm i -g create-react-app`<br>
`npm i create-react-app`<br>
`npm i --save-dev concurrently`<br>

> Add proxy in client/package.json

`"proxy": "http://localhost:5000"`

> Add scripts in package.json

`"client-install": "npm install --prefix client"`<br>
`"client": "npm start --prefix client"`<br>
`"dev": "concurrently \"npm run server\" \"npm run client\""`<br>

> Add bootstrap, fontawesome and setup assets

## 24. Add basic layout (032)

> Create Navbar, Landing and Footer components

## 25. Setup React router (033)

> Install React router in client folder

`cd client`<br>
`npm i react-router-dom`<br>

> Create Login and Register components and add routing

## 26. Add Register form (034)

> Create Register form with state

## 27. Add Login form (035)

> Create Login form with state

## 28. Registration form test (036)

> Install axios and send post request

`npm i axios`<br>

## 29. Error handling display (037)

> Instal classnames and add conditional classes

`npm i classnames`<br>

## 30. Redux setup (039)

> Run in client folder

`npm i redux`<br>
`npm i react-redux`<br>
`npm i redux-thunk`<br>

> Redux store and Redux Chrome extension setup

## 31. Redux workflow example (040)

> Create Redux action-reducer workflow example<br>
> Add propTypes

## 32. Registration and error reducer (041)

> Create registration request and error reducer

## 33. Redux login action - set current user (042)

> Run in client folder

`npm i jwt-decode`<br>

> Create redux login action to set current user and store it's data in localStorage

## 34. Login form functionality (043)

> Create login functionality and keep user logged in while navigating
> Change UNSAFE lifecycle method componentWillReceiveProps to SAVE methods
> Error fix in users API

## 35. Logout functionality (044)

> Create logout function and conditional Navbar links
> Create check for expired token to logout user automatically
> Add redirect to Login, Register, Landing components when logged in
> Change logout anchor to button

## 36. TextFieldGroup component (045)

> Create form input fields component

## 37. Profile reducer (046)

> Create profile reducer - get current profile

## 38. Dashboard start and spinner (047)

> Add functionality to Dashboard component
> Create loading Spinner component

## 39. Private Route setup (048)

> Create PrivateRoute component to allow private routes

## 40. CreateProfile component (049)

> Create CreteProfile component for filling info

## 41. Form field components (050)

> Create form field components

## 42. CreateProfile form (051)

> Add created form field components to CretteProfile component

## 43. Create profile functionality (052)

> Create action to create profile

## 44. Profile buttons, delete account (053)

> Create buttons to edit profile, education, experience functions
> Create delete account action

## 45. EditProfile component (054)

> Create EditProfile component
> Use safe componentDidMount instead of unsafe componentWillReceiveProps to set state

## 46. AddExperience component (055)

> Create AddExperience component

## 47. AddExperience functionality (056)

> Create addExperience action

## 48. AddEducation component (057)

> Create AddEducation component and addEducation action

## 49. Experience component (058)

> Run in client folder

`npm i moment`<br>
`npm i react-moment`<br>

> Create Experience component for display and deleteExperience action

## 50. Experience component (059)

> Create Education component for display and deleteEducation action

## 51. Profiles component (060)

> Create Profiles component and getProfiles action
> Add CLEAR_ERRORS for clearing errors from state after successfully submiting information

## 52. ProfileItem component (061)

> Create ProfileItem component

## 53. Profile component (062)

> Create Profile component with it's subcomponents and getProfileByHandle action

## 54. ProfileHeader component (063)

> Finish ProfileHeader component

## 55. ProfileAbout and ProfileCreds components (064)

> Finish ProfileAbout and Profile components

## 56. ProfileGithub component and fixes (065)

> Finish ProfileGithub component
> Create NotFound component
> Small fixes

## 57. addPost action (066)

> Create addPost action and postReducer

## 58. PostForm component (067)

> Create PostForm component

## 59. getPosts action, PostFeed component (068)

> Create getPosts action
> Create PostFeed component

## 60. PostItem component (069)

> Create PostItem component

# NFT-Generator

NFT generator website, is a full stack, NodeJS application that allow users to sign-up based on their role preferences
There are 2 roles for which user can sign-up:

- **_User_**
- **_Artist_**

Artist are users who can upload their arts and generate NFTs based on their uploaded layers.

As of now, Users are explorers who can view NFTs generated by different artists.

And then there are admins that are head of the system, the website has both

- **_Public routes accessible to all users_**
- **_Protected routes accessible to user with specific role_**

Conditional Rendering based on currently logged in user's role.

The logics / features that are implemented on top of [Fireship.io](https://www.youtube.com/watch?v=meTpMP0J5E8)'s existing one are:

---

- **_Implemented Multi-processing to use all the available threads in the system._**

- **_Dynamically calculated the no. of layers that are uploaded by the artists, based on them generated the arts._**

- **_Storing the data about generated arts in database_**

- **_Allow artists to upload their arts through the form given on frontend._**

- **_Refactored Fireship.io's synchronous art generation logic to asynchronous (non-blocking), so that the server can continue to handle the requests, while generating the arts._**

- **_Sign Up user according to their preferred roles_**

- **_Send welcome emails to newly created users._**

- **_Hashing User's password as a security measure before storing it into the database._**

- **_Login functionality implemented from scratch using JWT._**

- **_Restricting users from performing un-authorized actions, for example:_**

  - **_Allow only artists to upload and generate arts_**
  - **_Allow only admin(s) to view all the users of the system_**
  - **_All the user can update their own data, but only can admin(s) can update other user's data including their own._**

- **_Reset password and forgot functionality by sending the password reset link over to the Users's email._**

- **_Uploading and Resizing User's PFPs._**

- **_All the views of the above functionalities are implemented as views using Pug template engine (SSR - Server Side Rendering)._**

- **_Global Error Handling, both on server as well as the client side._**

- **_Updating data of oneself._**

- **_Implemented Security measures like:_**
  - **_Protection against XSS (Cross Site Scripting)_**
  - **_Protection against NoSQL Injection_**
  - **_Prevention of parameter pollution_**

---

## API Documentation

- Read API Documentation on [Postman](https://documenter.getpostman.com/view/20867739/2s8YsxtW1y)

## Acknowledgements

- Inspiration [Fireship.io](https://www.youtube.com/watch?v=meTpMP0J5E8)

## Possible Prospective Features

Before I started implementing this project, I talked to a few friends of mine at the college to check if this project can be implemented or not,
but the more I got indulged with this project and explored, the more I realized how complex this project is.
The project that I wanted to implement may not be fully-implemented but it's almost around completion.
Now, that I am this deep into it, I think that it might not be implemented 100% after all, due to some unforeseen circumstances, such as no existing references / examples
that show how to use NodeJS with Blockchain, on a broader picture how to use Web3 alongside Web2.
Thus, since I am just starting out, I feel like this is due to my inexperience and unfamiliarity with Blockchain and Web3.
For now it seems to be a roadblock for me but, I hope to solve this issue too once I gain some experience in Blockchain and Web3.
Though the app was supposed to be a crossover of both Web2 and Web3 (Both Centralized and De-Centralized), for now count this as a Centralized app only.

Although I implemented the feature of web3 wallet connection and it took me forever to find out some good options for the wallets.
Here are my observations that needs to be implemented to make this project complete (100%):

- Majority Wallet APIs are implemented for Next.js/React.js

- One prospective feature is to migrate SSR pug templates to a React Frontend/Next.js

- Make the project much more de-centralized, by learning the blockchain.

- Improve the art generation logic from being recursive to a much efficient iterative solution or better.

- Add Wallet Connect as the main login feature.

## Tech Stack

**Client:** Pug Template Engine (SSR - Server Side Rendering)

**Server:** Node.js, Express, MongoDB

## Screenshots

![Home Page](/Screenshots/1.JPG?raw=true "Home Page")
![Home Page (Artists Section)](/Screenshots/2.JPG?raw=true "Home Page (Artists Section)")
![Home Page (After Login)](/Screenshots/3.JPG?raw=true "Home Page (After Login)")
![Login Page](/Screenshots/4.JPG?raw=true "Login Page")
![Login Auth](/Screenshots/5.JPG?raw=true "Login Auth")
![Sign-up Page](/Screenshots/6.JPG?raw=true "Sign-up Page")
![Forgot Password Page](/Screenshots/7.JPG?raw=true "Forgot Password Page")
![Password Reset Link Sent to Email](/Screenshots/8.JPG?raw=true "Password Reset Link Sent to Email")
![Reset Password Page](/Screenshots/9.JPG?raw=true "Reset Password Page")
![Global Error Handling Page](/Screenshots/10.JPG?raw=true "Global Error Handling Page")
![Art Layers Uploaded By Artist](/Screenshots/15.JPG?raw=true "Art Layers Uploaded By Artist")
![Art Layers Uploaded By Artist](/Screenshots/16.JPG?raw=true "Art Layers Uploaded By Artist")
![Connect Crypto Wallet](/Screenshots/17.JPG?raw=true "Connect Crypto Wallet")
![Successfully Connected to Wallet](/Screenshots/18.JPG?raw=true "Successfully Connected to Wallet")
![Arts Generated By Artists](/Screenshots/11.JPG?raw=true "Arts Generated By Artists")
![User Profile Page](/Screenshots/12.JPG?raw=true "User Profile Page")
![Upload New Profile Photo of user](/Screenshots/13.JPG?raw=true "Upload New Profile Photo of user")
![User Profile Page Change Password Section](/Screenshots/14.JPG?raw=true "User Profile Page Change Password Section")

## Installation

Install my-project with npm

```bash
  git clone https://github.com/JustUzair/NFT-Generator.git
  cd NFT-Generator
  npm i
```

## Environment Variables

To run this project, you will need to add the following environment variables to your config.env file

`PORT`=3000

`NODE_ENV`=development/production (use any one of the two, CASE SENSITIVE)

`DATABASE`= `MONGODB_DATABASE_URL`

`DATABASE_PASSWORD`= `MONGODB_DATABASE_PASSWORD`

`JWT_SECRET`=`CUSTOM_JWT_SIGNATURE`

`JWT_EXPIRES_IN`=90d (`JWT token expires after 90 days`)

`JWT_COOKIE_EXPIRES_IN`=90 (`COOKIE expires after 90 days`)

[Nodemailer Doc](https://nodemailer.com/smtp/#authentication)

`EMAIL_USERNAME`=`MAILTRAP_SMTP_USERNAME`

`EMAIL_PASSWORD`=`MAILTRAP_SMTP_PASSWORD`

`EMAIL_HOST`=smtp.mailtrap.io

`EMAIL_PORT`=2525

`EMAIL_FROM`=`EMAIL_HOST`

[SendGrid Email API Doc](https://app.sendgrid.com/guide/integrate/langs/smtp)

`SENDGRID_USERNAME`=`SENDGRID_EMAIL_API_USERNAME`

`SENDGRID_PASSWORD`=`SENDGRID_EMAIL_API_PASSWORD`

<div id="top"></div>




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Kent_State_athletic_logo.svg/1200px-Kent_State_athletic_logo.svg.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">AssesmentSD</h3>

  <p align="center">
    Login Registration appplication using React-Native.
    <br />



</div>




<!-- ABOUT THE PROJECT -->
## About The Project

In this project, there is a basic login and registeration screen. If the user already exist then he can directly login using email and password. But if the user does not exist then he can create an account using the register/signup option. This is a React Native application running using expo server. 
For the front end the language used is React Native and for the backend, the language used is Node JS and rest apis has been developed. Apart from that Postman is used to test the APIs and Sql Workbench is used to check the queries of SQL.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [React.js](https://reactjs.org/)
* [ReactNative.js](https://reactnative.dev)
* [NodeJs.js](https://nodejs.dev)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You must have NodeJS and React-Native installed in your system. You can find the instructions to install both of them on thier official website. And for backend you must have MySQL setup in your system. For testing API, I used postman and to check database data, I used Sql Workbench. You can install all of it using the instructions available on the official website. After that clone the repository using-
 ```sh
 git clone "https://github.com/9536240277/AssesmentKent.git"
 ```
And we have two folders inside repository on backend and one frontend user need to run the below command in both for installation of the npm packages.
* npm
  ```sh
  npm install 
  ```

### Installation

For connecting with the proper database and host user need to update the dbConnection.js file available in backend folder


Enter your database details in dbConnection.js
   ```js
   host = 'ENTER YOUR hostname';
   user = 'ENTER YOUR username';
   database = 'ENTER YOUR database';
   password = 'ENTER YOUR database password';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

For running backend first user need to run the following command in backend folder:

* nodemon
  ```sh
  nodemon dbConnection 
  ```
For running frontend user need to run the following command in frontend folder:

* expo
  ```sh
  expo start
  ```

And it will start the expo server in the web. And from there you can select the option to run in android emulator which will open the emulator for running the android app. 

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Chhavi Vishnoi - vishnoichhavi@gmail.com

Project Link: https://github.com/9536240277/AssesmentKent.git

<p align="right">(<a href="#top">back to top</a>)</p>

[product-video]: /AssesmentKent/demovideo

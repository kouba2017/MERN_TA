# Targeted Concepts:
  - Routing with REACT: Defining the best practice, the libraries to include and the difference between Link & Route
  - UseParams & UseNavigate
  - Including different Bootstrap components in our Frontend
  - Recapitulative Quiz: " https://docs.google.com/forms/d/e/1FAIpQLSe_0M2uC-by9apVjYyOj0r_2kI7pSyjKQDzXdYTkWQA6mr1AA/viewform?usp=sf_link "

# The Final Product Functionality:
  - Home page: Displays the users' full names
  - View page: Display the details of a specific user (we access it by clicking on the user's name from the home page)
  - A button takes us to the homepage of each component

    
# 📌📌IMPORTANT NOTES:
 1. Before starting anything in our project, we wrap our App with a BrowserRouter tag:
    
+ Why do we use it? => Well, because our browser needs to be notified that he will navigate through different components.
    
+ Where do we put it? => Personally, I prefer to add it in the index.js file so it won't bother me later with my code and I make sure that it is not manipulated.
         
This is how we put it in the index.js:

  ````
            import React from 'react';
            import ReactDOM from 'react-dom/client';
            import './index.css';
            import App from './App';
            import reportWebVitals from './reportWebVitals';
            import {BrowserRouter} from 'react-router-dom'
             // REMEMBER TO INSTALL REACT-ROUTER-DOM FIRST
             //npm i react-router-dom
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
               <BrowserRouter>
                    <App />
               </BrowserRouter>
           // to enable navigation between views from different components in React
             );


          reportWebVitals();

````
2. To make our work more efficient and clear, we start by specifying our routes we know that we are going to use 2 routes and one link:
- 1st: Home page with path '/'
- 2nd: View page with path '/view/:id'
- Link: to the home page on each route so we just put it in our App.js

![Appjsimports](https://github.com/kouba2017/MERN_TA/assets/47293441/487dc0ae-7ebc-45f0-a557-ac3e49fbc553)

![AppJsContent](https://github.com/kouba2017/MERN_TA/assets/47293441/dbbfa78b-ae2e-4be4-9de0-4756d0cdf86c)

   PS: When using Bootstrap always remember to install it first (use the Bootstrap React official website to follow the instructions )
   
* Now what is the difference between Link and Route:
=> Link: used to navigate to a specific URL when clicking on the element (like an anchor tag in HTML)
=> Route: specifies the component that you will get when following a specific path.
- As for the previous code we went through the different components and we mentioned the props needed in each one.

  
 # For the HomeTwo component:
- we need to map the users list and show just the full names in a table
  
![homeComponent](https://github.com/kouba2017/MERN_TA/assets/47293441/7d9bee0f-4b1e-42e8-b190-92f22442aa5a)

PS: For the commented part it is just an example for using useNavigate:
📌📌What do you need to know about it? => When we want a specific functionality to happen before navigating to a specific path we use it. For example if we want to update a user then redirect to the homepage.
Here I need to make sure that on the homepage I will get the updated user, not the old info. That is why we declare a useNavigate const and insert it during that function and don't forget to give it the right path.

# For the ViewTwo component:

We need to lift up state of the user and get it by id, that is why we will enter the function specificuser that will filter the user by id and we will use useparams to get the id if the selected user

![viewComponent](https://github.com/kouba2017/MERN_TA/assets/47293441/e0aa0fbb-5695-4ec4-ad99-af5a67f3b6bf)

📌📌📌PS: The usePramas, we import it from react-router-dom and keep in mind that it is an object that takes different variables in the path of the route
for example: if I give the route a path='/view/:id/:fullName' and console.log(useParams())
 it will show me something like this: {id: id_value, fullName: fullName_value}
 If you notice the key is the same as the variable name in the path, make sure when you destructure it you keep the same names so it understands the location.
 



          
        

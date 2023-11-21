# About
* APIs
* FETCH / Axios methods
* UseEffect Hook

# Important Notes

- **What is an API?** => It allows one program to communicate with another; Application Programming Interface
- **Why do we use REST API?** => Because they are a special type of Api that only enable communication between web services.
- 📌📌 This is a link provides free Apis for testing, you can use them if you want to practice on your own, or even use them in a future project
  "https://apipheny.io/free-api/"
  From that link I took the API that we are going to work with during this session

                **http://universities.hipolabs.com/search?country=United+States**

  This an API that shows infos about all the universities in a specific country(in our case it is US).

  You can put it in your search to check it up and see how it looks like.

  We will directly work with useEffect since it is the method we are going to focus on during this stack

  - **What is useEffect?** => let react know that this component needs to do the function in the useEffect after render.


    ````
        useEffect(()=>{
        fetch('http://universities.hipolabs.com/search?country=United+States') //Like this we call our API into our component
            .then(response=>{
                //We use .json() because fetch is a function used in different 
                //programming languages so we need to make the response compatible with 
                // our REACT
                return response.json()}) // We set our Promises
            .then(data=>{
                console.log(data);
            })
            // Don't Forget to use it to show you the errors if they exist
            .catch(err=>console.log(err))
            // we add [] as a dependency array so that our fetch runs only at the first render
    //Always remember to add a dependency array otherwise they will show you a vulnerability error
    },[])

    ````

    - The question that appears now is why would we use Axios if we already have fetch:
                 1/ Axios is specific to JS so there is no need to turn the response into JSON
                 2/ Axios shows us more detailed errors, the ones related to HTTP; here is a link to learn more about HTTP errors
                          " https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"

      📌📌 To use Axios:
                + First you need to install it
                         **npm i axios **
                + Second, import it
                         **import axios from 'axios'**
                + Last, use it in your useEffect:
                   
                        ````
                          axios.get('http://universities.hipolabs.com/search?country=United+States')
                               .then(response=>{
                                        console.log(response.data);
                                        setList(response.data) //We want to show all the university names in our webpage
                                })
            
                              .catch(err=>console.log(err))

      ```
      
               -> Here we declared before outside the useEffect a list,
                    const [list, setList]=useState([]) //we used useState because it is a changeable variable
                 This list is going to contain all the data then we access the name key with a map function in our return as shown below:

      ````

                 return (
                    <div>
                        {
                               list.map((item,index)=>
                                      <p key={index} >{item['name']}</p>
                                 )
                          }
                  </div>  
                )


      ````


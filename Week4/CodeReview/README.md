# BOX GENERATOR Practice Assignment

# Points to focus on:
  - Stating and useState: Just note that if our variable is going to change at some point in the application, we need to declare it with useState

    ``` const [color, setColor] = useState(''); ```

Always remember to import the useState hook if it is not automatically updated

     import { useState } from 'react' 
    
  - Lifting State: When we need the updates that have occurred in one component in a different one we lift that state. Lifting in the English language means rising to a higher position or level.

# IMPORTANT NOTES:

   * Start your REACT app:
         ``` npx create-react-app box-generator ```

     📌 - Make sure you follow the naming conventions to avoid errors.
       - All your components must be in folder components in src folder.

   * Dividing the different components, you may need:
   1/ FORM.jsx
   * Form Submission:
      - The submitHandler function:
        + prevents the default form submission behavior (e.preventDefault())
        + logs the current color to the console
        + calls a function props.addBox(color, width) passed as a prop from the parent component.
        + After submitting the form, the color state is reset to an empty string: CLEANING UP
         ```
         const submitHandler = (e) => {
                 e.preventDefault();
                 console.log(color);
                 props.addBox(color); //CREATION of BOX+READ All BOXES
                 setColor('');
          }
         ```

		* Form Input:
      ```
        <form onSubmit={submitHandler}>
          <label>Color </label>
          <input type="text" value={color} onChange={e => setColor(e.target.value)} />
          <button>Add</button>
        </form>
       ```



2/ DISPLAY.jsx: Where we will be displaying all the boxes
         * Taking the boxes array as a props
             const {boxes}=props

		    * Map it and applying the convenient styling, with setting background-color as box.color:
             ```
               {boxes.map((box,index)=>
                <div key={index}
                    style={{
                        width:"200px",
                        height:'200px',
                        backgroundColor:box.box_color,
                        display:'inline-block',
                        margin:'15px'
                    }}
                >{item.box_color}</div>
            )}

           ```







We used:
                + Inline block: to make them appear on the same line
                + Index in map so that an error won't occur and we need to put in a key so that warning with an unsed value won't be displayed in our terminal.
                 

NOTE: logging props is useful for debugging and understanding the props being passed to the component.

3/ App.js:

````
const [boxes,setBoxes]=useState([])
  // boxes=[
  //   {box_color:"blue"},
  //   {box_color:"blue"}
  // ]
  // boxes=>is a list of each created box
  const additionBox=(color,width)=>{
    // creation of the box
    const box={box_color:color,box_width:width}
    console.log(box);
    // addition of the box to our old list of boxes
    setBoxes([...boxes,box])
  }


````


THEN we import our components

````
<div className="App">
      <Form addBox={additionBox}/>
      <Display  boxes={boxes} />
    </div>
````


    

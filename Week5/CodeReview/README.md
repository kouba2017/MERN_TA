# University APIs
  * Fetching API (we will work on a different API in our example)
  * Updating/Deleting functions
  * Styling using BOOTSTRAP

# STEPS:
   + Prepare our Bootstrap Environment: Follow this link to get the different components and steps
     "https://react-bootstrap.netlify.app/docs/getting-started/introduction/"
     - We open our integrated terminal in our react app
     - **'npm install react-bootstrap bootstrap'**
     - '**import 'bootstrap/dist/css/bootstrap.min.css';**' We import this link in our App.js so that the bootstrap components will be functional later.
  + We will fetch our API in a fetching component then we will display these key's in our table:
        - index
        - name
        - web_pages
    ````
      const [list,setList]=useState([])
    // useEffect(()=>{
    //     fetch('http://universities.hipolabs.com/search?country=Japan')
    //         .then(response=>{
    //             console.log(response);
    //             return res.json()
    //         })
    //         .then(data=>{
    //             setList(data) //we need the result to be in a list so we can map it later in the table
    //             console.log(list);
    //         })
    //         .catch(err=>console.log(err))
    // },[list])
    ````
📌📌 Don't forget to import the useState and useEffect

 + We start now working on the frontend part: "import the Table,Button component so we can call it"
     **import Table from 'react-bootstrap/Table';
     import {Button} from 'react-bootstrap'**

      ````
      <div>
            <Table striped bordered variant="light">
                {/* 4 columns Index, uni Name, Website, Options=> 2 buttons : Update & Delete */}
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Uni Name</th>
                        <th>Website</th>
                        <th>Options</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map((item,index)=>
                            <tr key={index} >
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td><a href={item.web_pages}>{item.web_pages}</a></td>
                                <td>
                                    <Button  variant='primary' >Update</Button>{'    '}
                                    <Button onClick={()=>deleteRow(index)}  variant='danger' >Delete</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
      ````


      + We add our delete function: But so we can delete we need to declare our list not fetch it because that way it won't reinitialize each time. 
        ````
        We add this list in our App.js and we delete the useEffect in our component
            const [list, setList]=useState([
                {"web_pages": ["http://www.aasa.ac.jp/"], "alpha_two_code": "JP", "domains": ["aasa.ac.jp"], "name": "Aichi Shukutoku University", "state-province": null, "country": "Japan"}, 
                {"web_pages": ["http://www.abu.ac.jp/"], "alpha_two_code": "JP", "domains": ["abu.ac.jp"], "name": "Aichi Bunkyo University", "state-province": null, "country": "Japan"}, 
                {"web_pages": ["http://www.aichi-edu.ac.jp/"], "alpha_two_code": "JP", "domains": ["aichi-edu.ac.jp"], "name": "Aichi University of Education", "state-province": null, "country": "Japan"}, 
                {"web_pages": ["http://www.aichi-fam-u.ac.jp/"], "alpha_two_code": "JP", "domains": ["aichi-fam-u.ac.jp"], "name": "Aichi Prefectural University of Fine Arts & Music", "state-province": null, "country": "Japan"}, 
                {"web_pages": ["http://www.aichi-gakuin.ac.jp/"], "alpha_two_code": "JP", "domains": ["aichi-gakuin.ac.jp"], "name": "Aichi Gakuin University", "state-province": null, "country": "Japan"}, 
                {"web_pages": ["http://www.aichi-med-u.ac.jp/"], "alpha_two_code": "JP", "domains": ["aichi-med-u.ac.jp"], "name": "Aichi Medical University", "state-province": null, "country": "Japan"}, 
                {"web_pages": ["http://www.aichi-pu.ac.jp/"], "alpha_two_code": "JP", "domains": ["aichi-pu.ac.jp"], "name": "Aichi Prefectural University", "state-province": null, "country": "Japan"},
                {"web_pages": ["http://www.aichi-u.ac.jp/"], "alpha_two_code": "JP", "domains": ["aichi-u.ac.jp"], "name": "Aichi University", "state-province": null, "country": "Japan"},
                {"web_pages": ["http://www.aikoku-u.ac.jp/"], "alpha_two_code": "JP", "domains": ["aikoku-u.ac.jp"], "name": "Aikoku Gakuen University", "state-province": null, "country": "Japan"},
                {"web_pages": ["http://www.aitech.ac.jp/"], "alpha_two_code": "JP", "domains": ["aitech.ac.jp"], "name": "Aichi Institute of Technology", "state-province": null, "country": "Japan"}, {"web_pages": ["http://www.akeihou-u.ac.jp/"], "alpha_two_code": "JP", "domains": ["akeihou-u.ac.jp"], "name": "Akita University of Economics and Law", "state-province": null, "country": "Japan"}])
    ````

Now, in our component we declare our delete function:

     ````
         const deleteRow=(elt)=>{
        // let copy=[...list]
        // copy.splice(index,1)
        const filteredList=list.filter((item,index)=>{
            console.log(index);
            console.log(elt);
            return (index !==elt)})
        // array.filter((item,index)=>return item[key]!==2)
        setList(filteredList)
        console.log(list);
        console.log("deleted successfully");
     }
    ````
+ We add an add form to add some values to the list:

     ````
       //we declare it in the return of the component
    <form onSubmit={submitHandler}>
            Uni Name: <input type="text" value={uniName} onChange={e=>setUniName(e.target.value)} />
            Website: <input type="text" value={website} onChange={e=>setWebsite(e.target.value)} />
            <Button type='submit' variant='success'>Submit</Button>
     </form>
  ````  
    ````
     //our submitHandler function
     const submitHandler=(e)=>{
        e.preventDefault()
        const newUni={
                'name':uniName,
                'web_pages':website
            }
        // console.log(list);
        props.addUni(newUni)
        console.log(newUni);
        // setUni(newUni)
        // console.log(list);
      }
   ```` 
+ This is the add function in the App.js and the component call:
  ````
   const addUni=(newUni)=>{
      setList([...list,newUni])
      console.log(list);
    }
   return (
    <fieldset className="App">
      <Fetching addUni={addUni} list={list}/>
      {/* <UpdateTwo addUni={addUni}/> */}
    </fieldset>
   );
  ````
      

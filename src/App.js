import { useState } from "react"
import './App.css'

const App=()=>{
    const[records,Setrecords]=useState([
                    {roll:1000,name:'amit'},
                    {roll:1001,name:'sumit'},
                    {roll:1002,name:'rohit'},
                    {roll:1003,name:'shyam'},
                    {roll:1004,name:'raju'}
    ])
    const handleUpdate=()=>{
    Setrecords([
                    {roll:2000,name:'amit-g'},
                    {roll:2001,name:'sumit-g'},
                    {roll:2002,name:'rohit-g'},
                    {roll:2003,name:'shyam-g'},
                    {roll:2004,name:'raju-g'}
    ])
    }
    return(
        <div>
        <h1>App Component</h1>
        <input type="button" value="update data" onClick={handleUpdate} /> <br />
        {
            records.map(row=>{return(
            <div key={row.roll} className="box">
            <h2>{row.roll}</h2>
            <p>{row.name}</p>
            </div>
            )})
        }
        </div>
    )
}
export default App;
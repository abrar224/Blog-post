import React, {useState} from 'react'

export default function Addblog(props){
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !description){
            alert("Title or Description can't be blank");
        }
        else{
            props.addBlog(title, description);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div className='container my-3'>
    <h3>Add blogs</h3>  
    <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Blog Title</label>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} 
            className="form-control" autoComplete='off' id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Blog Description</label>
            <input type="text" value={description} onChange={(e)=> setDesc(e.target.value)} 
            className="form-control" autoComplete='off' id="description"/>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Blog</button>
    </form>
    </div>
  )
}

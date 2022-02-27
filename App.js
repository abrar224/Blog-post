import './App.css';
import Header from "./my_components/Header" 
import Blogs from "./my_components/Blogs" 
import Footer from "./my_components/Footer"
import Addblog from './my_components/Addblog' 
import React, {useState, useEffect} from 'react'

function App() {
  let initblog;
  if(localStorage.getItem("blogs")===null){
    initblog = []
  }
  else{
    initblog = JSON.parse(localStorage.getItem("blogs"));
  }

  const Delete=(blog)=>{
    console.log(blog);

    setblogs(blogs.filter((e)=>{
      return e!==blog;
    }));
  }
  
  const addBlog=(title,description)=>{
    console.log(title, description)
    let id;
    if(blogs.length===0){
      id = 0;
    }
    else{
      id = blogs[blogs.length-1].id + 1;
    }

    const myblog ={
      id: id,
      title: title,
      description: description,
    }
    setblogs([...blogs, myblog]);
    console.log(myblog);
  }

  const [blogs, setblogs] = useState(initblog);
  useEffect(()=>{
    localStorage.setItem("blogs", JSON.stringify(blogs));
  },[blogs])

  return (
    <>
      <Header/>
      <Addblog addBlog={addBlog}/>
      <Blogs blogs={blogs} Delete={Delete}/>
      <Footer/>
    </>    
  );
}

export default App;

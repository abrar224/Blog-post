import React from 'react'
import Blog from './Blog'

export default function Blogs(props) {
    let styles = {
        minHeigth: "70vh",
        margin: "40px auto"
    }
  return (
    <>
    <div className='container' style={styles}>
        <h3>Blogs</h3>
        {props.blogs.length===0? "No blogs to show":
        props.blogs.map((blog)=>{
            return <Blog blog={blog} key={blog.id} Delete={props.Delete}/>
        })}
    </div>
    </>
  )
}


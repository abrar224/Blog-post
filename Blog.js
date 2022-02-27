import React from 'react'

export default function Blog({blog, Delete}) {
  return (
    <>
    <div>
        <h4>{blog.title}</h4>
        <p>{blog.description}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>Delete(blog)}>Delete</button>
    </div>
    <hr/>
    </>
  )
}

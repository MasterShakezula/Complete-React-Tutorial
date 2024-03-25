import { useCallback, useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //destruct data, ispending, and error from useFetch.js
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
  //when fetching data, pending. When fetched, false. No longer pending.
  //data : blogs means that we pass data in
  //from useFetch, and in this Home.js script, call it 'blogs' instead.

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  /*{useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])}*/

  
  // above is a dependancy array for useEffect.

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div> }
       {blogs && <BlogList blogs={blogs} title="All Blogs" /> } 
       {/*{ handleDelete={handleDelete} }*/}
       {/* we want to dynamically tag before the above line runs, we dont want mapping to happen when the data is still null */}
      <button onClick={() => setName('luigi')}>change name</button> 
    </div>
  );
}
 
export default Home;

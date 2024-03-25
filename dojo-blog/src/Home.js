import { useCallback, useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null); 

  const [name, setName] = useState('mario');

  const [error, setError] = useState(null);

  const [isPending, setIsPending] = useState(true);
  //when fetching data, pending. When fetched, false. No longer pending.


  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  /*{useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])}*/

  useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:8000/blog')
      .then(res =>{
        console.log(res);
        if (!res.ok)
        {
          throw Error("Could not fetch data...");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
      }) /*{} returns to us a promise. get response object, then data*/
      .catch((e) => {
        setIsPending(false);
        setError(e.message);
        //console.log(e.message);
      }) /*catch a network error if it happens*/
    }, 1000)
  }, []); 
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

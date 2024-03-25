//use this file for custom hooks
import { useEffect, useState } from "react";
const useFetch = (url) =>{ // url will be the json database endpoint 
  const [data, setData] = useState(null); 

  const [name, setName] = useState('mario');

  const [error, setError] = useState(null);

  const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        fetch (url)// lets not hard code this... pass in url parameter instead fetch('http://localhost:8000/blog')
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
            setData(data);
            setIsPending(false);
            setError(null);
          }) /*{} returns to us a promise. get response object, then data*/
          .catch((e) => {
            setIsPending(false);
            setError(e.message);
            //console.log(e.message);
          }) /*catch a network error if it happens*/
        }, 1000)
      }, [url]); //url is a dependancy now
      //that means whenever the url changes...
      //the useffect code is executed once more to get the endpoint data
      
      return {data, isPending, error} //return data from our custom 'use' hooks
}
//custom hooks need to start with 'use'
export default useFetch;
// import { useState } from "react";


export const fetchData = async (url) => {
    // const [data, setData] = useState([]);
  const response = await fetch(url);
  const data = await response.json();
//   console.log(d)
//   setData(d)
  
  return data;
}



export const statisticsLoader = async () => {
    const category = await fetchData('categories.json');
    const jobs = await fetchData('jobs.json');
    const data = {
        category: category,
        jobs: jobs
    }
    return data;
}
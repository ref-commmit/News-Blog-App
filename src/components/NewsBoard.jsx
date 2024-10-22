import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';



const NewsBoard = () => {

    const [articles,setArticles] = useState([]);


    useEffect(()=>{

        let URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;

        fetch(URL).then(response=>response.json()).then(data=>setArticles(data.articles))
    },[])

    // useEffect(() => {https://newsapi.org/v2/top-headlines?country=us&apiKey=2553acf3a776434cb47331bb24136532
    //     let URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey= `;
    
    //     fetch(URL)
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error("Network response was not ok");
    //         }
    //         return response.json();
    //       })
    //       .then(data => setArticles(data.articles))
    //       .catch(error => console.error("Error fetching the news:", error));
    //   }, []);

  return (
    <div>
    
        <h2 style={{display:"flex", justifyContent:"center" ,color:"white" ,padding:"15px" }}>Latest<span className='badge bg-danger' style={{marginLeft:"5px"}}>News</span></h2>
       <div style={{marginLeft:"75px"}}>
        {articles.map((news, index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
        </div>
      
    </div>
  )
}

export default NewsBoard

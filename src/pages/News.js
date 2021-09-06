import React, {useEffect,useState} from 'react';
import Header from "../components/Header";
import Article from "../components/Article";
import axios from "axios";
const News = () => {

    const [data,setData] = useState([]);

const getData = () => {
    axios.get('http://localhost:3003/articles')
        .then((response) =>{
            setData(response.data)
        })
}

useEffect(() =>{
    getData();
},[])

    return (
        <div>
            <Header></Header>
<div className="news-container">
    <h1>News</h1>

    <form>
        <input type="text" placeholder="Nom"/>
        <textarea placeholder="Message"> </textarea>
        <input type="submit" value="Envoyer"/>
    </form>


    <ul>
        {data.map((article)=>{
            return <Article key={article.id} article={article} />
        })}
    </ul>

</div>
        </div>
    );
};

export default News;

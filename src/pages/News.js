import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Article from "../components/Article";
import axios from "axios";

const News = () => {
    const [data, setData] = useState([]);

    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const getData = () => {
        axios.get('http://localhost:3003/articles')
            .then((response) => {
                setData(response.data)
            })
    }

    useEffect(() => {
        getData();
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3003/articles', {
            author,
            content,
            date:Date.now()
        })
            .then((res) => {
                setContent('');
                setAuthor('');
            })
    }


    return (
        <div>
            <Header></Header>
            <div className="news-container">
                <h1>News</h1>

                <form onSubmit={(e) => {
                    handleSubmit(e)

                }}>
                    <input type="text" onChange={(e) => {
                        setAuthor(e.target.value);
                    }} placeholder="Nom" value={author}/>
                    <textarea placeholder="Message" onChange={(e => setContent(e.target.value))} value={content}> </textarea>
                    <input type="submit" value="Envoyer"/>
                </form>


                <ul>
                    {data
                        .sort((a, b) => {
                            return b.date - a.date
                        })
                        .map((article) => {
                            return <Article key={article.id} article={article}/>
                        })}
                </ul>

            </div>
        </div>
    );
};

export default News;

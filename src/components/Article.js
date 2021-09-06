import React from 'react';

const Article = ({article}) => {
    return (
        <div>

            <p>Auteur :  {article.author}</p>
            <p>Contenu : {article.content}</p>
            <p>Date : {article.date}</p> <br />


        </div>
    );
};

export default Article;

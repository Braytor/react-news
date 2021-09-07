import React from 'react';

const Article = ({article}) => {

const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString('fr-FR',{
        year:'numeric',
        day:'numeric',
        month:'long',
        hour:'numeric',
        minute:'numeric'
    })
    return newDate
}

    return (
        <div className="article">
<div className="card-header">
    <h3>Auteur :  {article.author} </h3>
    <em>Posté le :  {dateParser(article.date)}</em>
</div>
            <p>Contenu : {article.content}</p>

            <div className="btn-container">
                <button> Modifier</button>
                <button> Supprimer</button>
            </div>

        </div>
    );
};

export default Article;

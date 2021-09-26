function CardRazasPerros({nombreRaza, imagen, likes, comments, views}) {
    return (
        <li className="breedCard">
            <div className="contImagen">
                <img src={imagen} alt={nombreRaza}/>
            </div>
            <span className="breedTitle">{nombreRaza}</span>
            <ul className="reactions">
                <li><i className="fas fa-heart heartRed"></i>{likes}</li>
                <li><i className="fas fa-comment-dots comment"></i>{comments}</li>
                <li><i className="fas fa-eye views"></i>{views}</li>
            </ul>
        </li>
    );
}

export default CardRazasPerros;
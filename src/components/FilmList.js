import React from 'react';
import Film from "./Film";

const FilmList = ({films}) => {

    const filmItems = films.map((film) => {
        return (
            <Film name={film.name} url={film.url} key={film.id}/>
        )
    })

    return (
        <div className="film-list">
            <h1>Upcoming Film Releases for UK</h1>
            <hr></hr>
            {filmItems}
            <hr></hr>
            <h2 className="button"><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a></h2>
        </div>
    )
}

export default FilmList;
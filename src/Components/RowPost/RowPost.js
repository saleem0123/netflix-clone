import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {imageUrl} from '../../Constant/Constant'
import axios from '../../axios'

function RowPost(props) {
    const [Movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then(Response => {
            console.log(Response.data)
            setMovie(Response.data.results)
        }).catch(err => {
            // alert('network error')
        })

    }, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='Posters'>
                {Movie.map(obj =>
                    <img className={props.isSmall ?'smallPoster' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

                )}






            </div>

        </div>
    )
}

export default RowPost;


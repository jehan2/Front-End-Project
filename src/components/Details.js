import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'

function Details() {
    const [state, setstate] = useState([])
    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://6362424b66f75177ea2a998e.mockapi.io/insurances/${id}`)

            .then((response) => {
                console.log(response.data);
                
                //console.log(id);

                setstate([response.data]);
            }).catch(err => {
                console.log(err);
            })

    }, [])
    return (
        <div>

            {state.map((items, id) => {
                return (
                    <div key={id}>
                        <img src={items.img} width="20%"></img>
                        <p>{items.company1}</p> <button>اشترك</button><br/>
                        
                        <p>{items.company2}</p> <button>اشترك</button>
                    </div>
                )

            })}
        </div>
    )
}

export default Details
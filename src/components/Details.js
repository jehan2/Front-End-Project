import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom'


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
        <div className='con1'>

            {state.map((items, id) => {
                return (
                    <div key={id} className='con2'>
                        <ul>
                        <il><img className='img-d'src={items.img} width="30%"  ></img></il>

                       <il><p>{items.company1}</p> <button className='btn'>اشترك</button ></il> <br/>
                
                       <il> <p>{items.company2}</p> <button className='btn'>اشترك</button></il> <br/>

                       <il><Link to ='/Card'><button className='btn'>العودة</button></Link></il>
                        </ul>
                    </div>
                )

            })}
        </div>
    )
}

export default Details
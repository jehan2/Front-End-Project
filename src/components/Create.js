import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
    const navigate = useNavigate();
    const [title, setTitle] = useState()
    const [img, setImg] = useState()
    const [company1, setCompany1] = useState()
    const [company2, setCompany2] = useState()
    let url = "https://6362424b66f75177ea2a998e.mockapi.io/nsurances1"

    const postData = () => {
        axios.post(url, {
            title,
            img,
            company1,
            company2
        })

            .then(res => {
                console.log(res);
                // localStorage.setItem("fName", res.data.fName)
                // localStorage.setItem("lName", res.data.lName)
                // localStorage.setItem("id", res.data.id)
                 navigate("/Home");
            })
    }
    return (
        <div>

            <input placeholder='title' onChange={e => { setTitle(e.target.value) }}></input>
            <input placeholder='img' onChange={e => { setImg(e.target.value) }}></input>
            <input placeholder='company1' onChange={e => { setCompany1(e.target.value) }}></input>
            <input placeholder='company2' onChange={e => { setCompany2(e.target.value) }}></input>

            <button onClick={postData}>LogIn</button>

        </div>
    )
}

export default Create;
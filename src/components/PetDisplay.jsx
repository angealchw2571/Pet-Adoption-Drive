import React from 'react'
import { Link } from 'react-router-dom'

function PetDisplay(props) {
    const arrData = props.data.data
    // console.log("arrData", arrData)
    const testing = arrData.map((e, i) => {
        return (
            <li key={i}>
                <Link to={`/findpets/${e.attributes.name}/${e.id}/${i}/${props.id}`} >
                <h4>{e.attributes.name} </h4>
                <img src={e.attributes.pictureThumbnailUrl} alt="" key={e.id}/>
            </Link>
            </li>
        )
    })
    return (
        <div>
            <h1>pet display!</h1>
            <ul>
                {testing}
            </ul>
        </div>
    )
}

export default PetDisplay

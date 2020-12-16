import React from 'react'

const CampusForm = (props) => {
    const campus = props.campus    // const {campus} = props
    return (
        <div id="campusForm" >
            <div >
                <img src = {campus.imageUrl} alt= {`image of ${campus.name}`} id="campusImage"/>
            </div>
            <p id="campusName"> {campus.name} </p>
        </div>
    )
}

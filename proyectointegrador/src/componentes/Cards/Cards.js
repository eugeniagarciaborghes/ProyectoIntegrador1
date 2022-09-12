import React from 'react'
import Card from '../Card/Card'
/*import "./Card.css";*/

function Cards (props) {
    console.log(props.info);
    return (
        <> 
            {
                props.info?.map(elm => <Card info={elm}/>)
            }

        </>
    )
}

export default Cards
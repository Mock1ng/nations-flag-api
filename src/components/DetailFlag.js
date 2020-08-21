import React from 'react'

const DetailFlag = ({ match }) => {
    return (
        <div>
            <h1>this is detail flag's component</h1>
            <p>{match.params.nationFlag}</p>
        </div>
    )
}

export default DetailFlag

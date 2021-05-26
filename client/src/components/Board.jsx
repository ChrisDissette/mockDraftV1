import React from 'react'

const Board = (props) => {
    let draftSpots = [1,2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <div>
            <div className='grid-container'>
            {
                draftSpots.map((item, i) => {
                return  <div className='grid-item' style={{height: '200px', width: '200px', border: '1px solid black'}}>
                    <p>{item}</p>
                </div>
                })
            }
            </div>

        </div>
    )
}

export default Board

import React from 'react'

const AvailablePlayers = (props) => {
    return (
        <div>
            <h1>Available Players</h1>
                    <div>
                        <table className='table table-sm table-bordered table-striped'>
                            <thead className='thead thead-dark'>
                                <tr>
                                    <th scope='col'>Rank</th>
                                    <th scope='col'>Player Name</th>
                                    <th scope='col'>Team</th>
                                    <th scope='col'>Position</th>
                                    <th scope='col'>ADP</th>
                                    <th scope='col'>2020 Points</th>
                                    <th scope='col'>Draft</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                props.playerList.map((item, i) => {
                        return <tr  key={i}>
                            <td>{item.ranking}</td>
                            <td>{item.playerName}</td>
                            <td>{item.teamName}</td>
                            <td>{item.playerPosition}</td>
                            <td>{item.aDP}</td>
                            <td>{item.ptsLastYear}</td>
                            <td> <button className='btn btn-success'>Draft</button> </td>
                        </tr>

                        })
                    }
                            </tbody>
                        </table>
                    </div>
                
            
        </div>
    )
}

export default AvailablePlayers

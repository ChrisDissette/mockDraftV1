import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

import AvailablePlayers from '../components/AvailablePlayers'
import DraftedPlayers from '../components/DraftedPlayers'
import Board from '../components/Board'
import Input from '../components/Input'

const Main = () => {

    const [playerList, setPlayerList] = useState([])
    const [state, setstate] = useState()


    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then((res => {
                console.log(res.data.player)
                setPlayerList(res.data.player)
            }))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Input />
            <Board />
            <AvailablePlayers playerList={playerList} setPlayerList={setPlayerList} />
            <DraftedPlayers />
        </div>
    )
}

export default Main

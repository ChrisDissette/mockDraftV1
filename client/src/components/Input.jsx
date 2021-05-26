import {useState} from 'react'

const Input = (props) => {

    
    const [draftSpot, setDraftSpot] = useState([])
    const [numberOfTeams, setNumberOfTeams] = useState(1)

    const submitTeamCountHandler = event => {
        event.preventDefault()
        // setNumberOfTeams({
        //     [event.target.name]:event.target.value
        // })
        // for(let i = 1; i<=parseInt(numberOfTeams); i++){
        //     console.log("adding item" + i);
        //     setDraftSpot([...draftSpot,i])
        // }
        setDraftSpot([...Array(parseInt(numberOfTeams)).keys()]);
        // Array(parseInt(numberOfTeams)).map((item, i) => {
        //     setDraftSpot([...draftSpot, i + 1]);
        // })
    }

    return (
        <div style={{width:"300px", margin:'auto'}}>
            <form onSubmit={submitTeamCountHandler}>
                <div className="form-group">
                    <label htmlFor="numberOfTeams">How many teams?</label>
                    <select className='form-control' name='numberOfTeams' onChange={(event) => setNumberOfTeams(event.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <button className='btn btn-outline-success mt-3' style={{width:'300px'}}>Submit</button>
                </div>
                </form>

                <form>
                <div className="form-group">
                    <label htmlFor="draftSpot">Which spot are you drafting in?</label>
                    <select className='form-control' name='draftSpot'>
                        
                        { draftSpot.map((item, i) => {
                            return <option key={i} value={item + 1}>{item + 1}</option>
                        })
                        }
                    </select>
                </div>
                <button className='btn btn-outline-success mt-3' style={{width:'300px'}}>Let's Draft</button>
                </form>
        </div>
    )
}

export default Input

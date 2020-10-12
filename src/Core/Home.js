import React, {useState} from 'react'
import Base from './Base'

const Home = () => {
    const [count, setCount] = useState(0);

    const rightSideClicked = e => {
        console.log("right side is clicked");
        setCount(count + 1);
    }


    
    return (
        <Base title="Home Page" decription="This is our Home Page" >
            <div className="col bg-dark text-white">
                <div className="row btn btn-success">left side</div>
                <div className="row btn btn-danger" onClick={rightSideClicked} >right side is clicked {count} time{count==1?"": "s"}</div>
            </div>
        </Base>
    )
}

export default Home

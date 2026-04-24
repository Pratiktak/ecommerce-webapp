import { Link } from "react-router-dom";
import {Header} from "../Components"
import {Card} from "../Components/index"
export default function Home(){
    return(
        <>
        <Header />
        <div id="home">
            <Card />
        </div>
        
        <Link to="/">Home</Link>
        </>
    )
}
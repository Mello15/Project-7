import { cardActionAreaClasses } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Copyright from './Copyright';
import '../index.css'
function Display({name, category, channel, location, image}){

    return(<Card>
        <CardContent>
            <h1>
                {name}
            </h1>
        </CardContent>

    <CardMedia className='imagesize' component='img' image={image} alt='Photo error'/>
    <CardContent>
        <h2> Category: {category}</h2>
        <h2> Channel: {channel}</h2> 
        <h3> Location: {location}</h3>
    <Copyright/>
    </CardContent>
    
</Card>  
    
    );

}
export default Display; 
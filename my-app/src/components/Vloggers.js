import Grid from '@mui/material/Grid';
import Display from './Display';

function Vlog (){

const vloggers= [{
name: 'Jones Family',
category: 'Hauls',
channel: 'Just the Jones', 
location: 'Texas',
image: 'https://yt3.ggpht.com/a-/AAuE7mAPnzaYSIYrUc9E2FZ15Sln5pYfLexKMas76g=s240-mo-c-c0xffffffff-rj-k-no', 

}, 

{
name: 'Roman Atwood',
category: 'Pranks',
channel: 'RomanatwoodVLogs', 
location: 'Ohio',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjy_ggta3cOKAeO5egCrtf3lDNCA9Q8oPaA&usqp=CAU', 


},  

{
name: 'The Davidsons',
category: 'Adventure',
channel: 'Daily Davidson', 
location: 'Virgina',
image: 'https://yt3.ggpht.com/ytc/AKedOLRKtW27XPSl4UNfshkqKY8ZZTcuD4sGVc4ePK2s9A=s900-c-k-c0x00ffffff-no-rj', 
    
}


]

    return(<Grid container spacing={2}>
    
        {vloggers.map((Vlog) =>{
            return <Grid item xs={4}> 
                <Display name={Vlog.name} category={Vlog.category} channel={Vlog.channel} location={Vlog.location} image={Vlog.image} />

            </Grid>
        })
    }
         </Grid>  
);

}  
export default Vlog;

import React from "react";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";

const NUM_MOD=10

export default function Lock(length) {
    const zeros=Array.from(Array(length), () => 0);
    const [numbers, setNumbers] = React.useState(zeros);

    function handleClick(i) {
        setNumbers(numbers.map((number,j)=>{
            const newNumber=i==j?(number+1):number
            return newNumber%NUM_MOD

        }))

    }

    return <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: "20px"}}>
        <Grid container>
        {numbers.map((number,i)=>{
            return <Grid item key={i} xs={2.5} style = {{padding: "20px"}} onClick = {()=>handleClick(i)}>
                <Paper 
             sx={{height: 90,width: 90, fontSize: 75,display: 'flex',  justifyContent:'center', alignItems:'center'}}>{number}
            </Paper>
            </Grid>

        })}
        </Grid>
       
    </div>

}


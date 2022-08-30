import {React, useState} from 'react';
import { Grid, Paper} from "@mui/material";
import { Link } from '@mui/material';
import Lock from '../components/lock';


const SCREEN_WIDTH=12
const LOCK_LENGTH=4

export default function Wonders() {
    



    return <div> 

        <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: 'white'}}>
            Maybe the treasure is in one of these places?
        </h2>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

        {Lock(LOCK_LENGTH)}
        </div>

        
        
            </div> 
  }
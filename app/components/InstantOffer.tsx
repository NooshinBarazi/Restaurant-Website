import * as React from 'react';
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CircularProgress from '@mui/material/CircularProgress';
import Image from "next/image";
import confetti from '../../public/assets/images/confetti.png'


const useStyle = makeStyles({
    box:{
        width: '330px',
        height: '520px', 
        backgroundColor: '#b8a870',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    offer:{
        fontSize: '16px',
        fontWeight: '600',
        color: 'white',
        marginTop: '15px'
    },
    circleTypeo: {
      position: 'absolute',
      top: '4.9%',
      left: '50%', 
      transform: 'translate(58%, 45%)',
      color: 'white',
      fontSize: 'xx-small',
      width:'20px',
      textAlign: 'center'
    },
    circleShadow: {
      color: 'gray',
      position:'absolute',
      top:'5%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
})

const CircularCounter = () => {
  const classes = useStyle()
  const [counter, setCounter] = React.useState(60)
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      setCounter((prevCounter) =>{
        if(prevCounter === 0) {
          return 60
        }else if (prevCounter === 1) {
          return 0
        } else{
          return prevCounter - 1
        }
      })
      }, 1000)
    return () => 
    clearInterval(interval)
  }, [])

  return(
    <div style={{position: 'relative', display: 'inline-block', left:'10px', top: '-12px'}}>
      <CircularProgress
    variant='determinate'
    value={100 - (counter / 60) * 100}
    size={50}
    thickness={3}
    sx={{ position: 'absolute', top: '5%', left: '50%', 
  transform: 'translate(-50%, -50%)', color: 'white', zIndex: '99' }}
    />
    <Typography className={classes.circleTypeo}>{counter}</Typography>
<CircularProgress className={classes.circleShadow}
variant="determinate"
 value={100}
 size={50}
 thickness={3} />
    </div>
  )

}









export default function InstanceOffer () {
  const classes = useStyle()

    return(
        <>
        <Box className={classes.box} >
            <Box sx={{display: 'flex', gap:'5px', marginRight: '-10px'}}>
                <Image
                 src={confetti}
                 alt="confeetti pic"
                 width={50}
                 height={50}
                />
                <Typography variant="h2" className={classes.offer} >پیشنهاد لحظه&zwnj;ای</Typography>
            </Box>
            <CircularCounter />
        </Box>
        </>
    )
}
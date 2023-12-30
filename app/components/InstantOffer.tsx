import * as React from 'react';
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CircularProgress from '@mui/material/CircularProgress';
import Image from "next/image";
import confetti from '../../public/assets/images/confetti.png';
import ImagePlaceholder  from './ImagePlaceholder';

const useStyle = makeStyles({
    box:{
        width: '330px',
        height: '550px', 
        backgroundColor: '#b8a870',
        borderRadius: '20px',
        marginTop: '20px',
        paddingTop: '20px'
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
    <div style={{position: 'relative', display: 'inline-block', left:'10px'}}>
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
  const classes = useStyle();

  const [loading, setLoading] = React.useState(true)
  const [imgUrl, setImgUrl] = React.useState('')
  const [caption, setCaption] = React.useState('')
  const [respi, setRespi] = React.useState('')
  const [price, setPrice] = React.useState('')

  React.useEffect(()=>{
    const fetchData = async () =>{
      const response = await fetch('https://fakestoreapi.com/products')
    

      const data =  await response.json()

      data.map((item: any)=>{
        {
          setInterval(()=>{
            
            setImgUrl(item.image)
            setCaption(item.title)
            setRespi(item.title)
            setPrice(item.price)
          }, 60000)
          setImgUrl(item.image)
          setCaption(item.title)
          setRespi(item.title)
          setPrice(item.price)
          setLoading(false)
        }
      })

      const randomData = Math.floor(Math.random() * (data.length - 1))
      console.log(randomData);

      setInterval(() =>{
        data.forEach((list: any) =>{
          setImgUrl(list.image)
          console.log('60 second');
          
        })
       
      }, 60000)
      }
      fetchData();
  }, [])

    return(
        <>
        <Box className={classes.box}  >
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom:  '20px'}}   >
               <Box sx={{display: 'flex', gap: '15px', marginRight: '-10px'}} >
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
            <ImagePlaceholder  loading={loading} imgUrl={imgUrl} caption={caption} respi={respi} price={price} />
        </Box>
        </>
    )
}
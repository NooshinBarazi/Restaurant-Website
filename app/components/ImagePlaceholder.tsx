import { Skeleton, Typography } from "@mui/material";


type Params = {
    loading: boolean;
    imgUrl: string;
    caption: string;
    respi: string;
    price: string;
}
 const ImagePlaceholder = ( {loading, imgUrl, caption, respi, price} : Params) =>{

    if(loading){
        return(
            <div>
                <Skeleton  variant="rectangular" width={300} height={300}/>
                <Skeleton variant="text" width={300} />
            </div>
        )
    }
    return(
        <figure style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}} >
            <img src={imgUrl} width="280" height="290" style={{borderRadius: '10px'}} />
            <Typography >{caption} test</Typography>
            <Typography variant="body2" color='text.secondary' >{respi}</Typography>
            <Typography sx={{marginBottom: '30px'}}>{price}تومان</Typography>
        </figure>
    )

}
export default ImagePlaceholder
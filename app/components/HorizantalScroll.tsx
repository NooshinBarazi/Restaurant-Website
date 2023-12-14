import { IconButton} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const HorizantalScroll = () => {
    const handScroll = () => {
      };
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <h3 style={{padding: '1rem', background: 'white'}}>سالادها</h3>
    <div style={{height: '1px', background: '#eaeef5',flex: '1 1'}}></div>
    <div >
    <IconButton
      onClick={handScroll}
      style={{ backgroundColor: '#b9b9b9', padding: '1rem', margin: '0 1rem' }}
    >
      <ArrowForwardIosIcon fontSize="small" style={{ color: "black" }} />
    </IconButton>
    <IconButton
      onClick={handScroll}
      style={{ backgroundColor: '#b9b9b9', padding: '1rem' }}
    >
      <ArrowBackIosIcon fontSize="small" style={{ color: "black" }} />
    </IconButton></div>
    </div>
  )
}

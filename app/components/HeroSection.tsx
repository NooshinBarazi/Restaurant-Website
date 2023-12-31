import { useAppSelector } from "@/redux/store"
import { ImageSlider } from "./ImageSlider/ImageSlider"
import InstanceOffer from "./InstantOffer"
import { Box } from "@mui/material"

export const HeroSection = () => {
    const {sliderImages} = useAppSelector(state => state.foods)
  return (
    <Box sx={{display: 'flex', gap: '32px'}}>
        <ImageSlider imageSlider={sliderImages} />
        <InstanceOffer />
    </Box>
  )
}

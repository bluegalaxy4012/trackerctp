import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface FavouriteButtonProps {
    isRouteFavourite: boolean;
    addFavourite: () => void;
}
  
export default function FavouriteButton({ isRouteFavourite, addFavourite }: FavouriteButtonProps) {
    
  return (
    <IconButton aria-label="favourite" onClick={addFavourite}>
        { isRouteFavourite ? <StarIcon /> : <StarOutlineIcon/> }
    </IconButton>
  );
}
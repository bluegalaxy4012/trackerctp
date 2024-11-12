import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Button } from "@mui/material";

interface FavouriteButtonProps {
    isRouteFavourite: boolean;
    addFavourite: () => void;
}
  
export default function FavouriteButton({ isRouteFavourite, addFavourite }: FavouriteButtonProps) {
    
  return (
    <Button aria-label="favourite" onClick={addFavourite} sx={{ minWidth: 0 }}>
        { isRouteFavourite ? <StarIcon /> : <StarOutlineIcon/> }
    </Button>
  );
}
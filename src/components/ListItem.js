import './ListItem.css'; 
import { Card, Box, Stack, Typography, Divider } from '@mui/material';

function ListItem(props){
    return(
        <Box>

    <Card className="listItem">
        <img className="listItem-img movie-poster" alt="movie-poster" src={props.poster}/>
        <Stack>
            <Typography variant='h6' className="listItem-title">
                {props.title}
            </Typography>
            <Typography className="listItem-releaseYear">
                {props.releaseYear}
            </Typography>
            <Typography className="listItem-mediaType">
                {props.mediaType}
            </Typography>
        </Stack>
    </Card>
    <Divider />
        </Box>
    );
}

export default ListItem;
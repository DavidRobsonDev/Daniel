import {
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Box,
}  from '@mui/material';
    import DeleteIcon from'@mui/icons-material/Delete';
    import Removelcon from '@mui/icons-material/Remove';
    import AddIcon from '@mui/icons-material/Add';
    import { useContext } from 'react';
    import { ProductContext } from '../context/ProductContext';

    function CartItem({ item }) {
        const {
            removerDoCarrinho,
            incrementarQuantidade,
            decrementarQuantidade,
        } = useContext (ProductContext);
        return (
            <ListItem
            secondaryAction={
                <Box sx={{ display: 'frex',
            alignItems: 'center' }}>
                <IconButtom onClick={()=> decrementarQuantidade(item.id)}>
                    <RemoveIcon />
                </IconButtom>
                <Typography variant="body1" component="span" sx={{ mx: 1}}>
                    {item.quantidade}
                </Typography>
                <IconButton onClick={()=> incrementarQuantidade(item.id)}>
                    <AddIcon />
                </IconButton>
            </Box>
            }
        )

    }
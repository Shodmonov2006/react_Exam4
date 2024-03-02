import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>

            <List sx={{ py: 1, width: 600}}>

                <ListItem disableGutters>
                    <div className='w-[95%] m-auto'>
                        <p className='font-bold text-[20px]'> Таблица размеров </p>
                        <tr className='flex text-[16px] justify-around rounded-[5px] py-[10px] mt-[10px] bg-[#f3f3f3]'>
                            <td className='text-[16px]'>Российский размер</td>
                            <td className='text-[16px]'>Размер производителя</td>
                        </tr>
                        <tr className='flex text-[16px] justify-around   py-[5px] hover:bg-[#f5f4f4]'>
                            <td> 38 </td>
                            <td> 27 </td>
                        </tr>
                        <tr className='flex text-[16px] justify-around   py-[5px] hover:bg-[#f5f4f4]'>
                            <td> 38-40 </td>
                            <td> 28 </td>
                        </tr>
                        <tr className='flex text-[16px] justify-around   py-[5px] hover:bg-[#f5f4f4]'>
                            <td> 40-42 </td>
                            <td> 29 </td>
                        </tr>
                        <tr className='flex text-[16px] justify-around   py-[5px] hover:bg-[#f5f4f4] text-center'>
                            <td className='text-center'> 44 </td>
                            <td> 30 </td>
                        </tr>
                        <button className='text-[#a230aa] px-[30px] border-[2px] py-[6px] mt-[20px] rounded-[5px] hover:border-[#e01dea] border-[#bd36c7]'> Выбрать размер </button>
                    </div>
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Typography variant="subtitle1" component="div">
            </Typography>
            <br />
            <p variant="outlined" onClick={handleClickOpen} className='cursor-pointer text-[14px]'> Таблица размеров </p>
            <SimpleDialog

                open={open}
                onClose={handleClose}
            />
        </div>
    );
}



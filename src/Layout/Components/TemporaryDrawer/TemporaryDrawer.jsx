import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Switcher from '../../../Dark/Switcher';

export default function TemporaryDrawer() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className='w-[50%] m-auto mt-[20px]'>
                    <div className='flex justify-center gap-[20px]'>
                        <button className='border-2 px-[10px] border-black dark:text-[black]' onClick={() => changeLanguage("en")}>en</button>
                        <button className='border-2 px-[10px] border-black dark:text-[black]' onClick={() => changeLanguage("ru")}>ru</button>
                    </div>
                    <div>
                        <Switcher />
                    </div>
                </div>
                <ul className='w-[45%] m-auto text-[black]'>
                    <Link to={"/"}><li className='mt-[10px] text-center'>{t("t1")}</li></Link>
                    <Link to={"/services"}><li className='mt-[15px] text-center'>{t("t2")}</li></Link>
                    <Link to={"/objects"}><li className='mt-[15px] text-center'>{t("t3")}</li></Link>
                    <Link to={"/career"}><li className='mt-[15px] text-center'>{t("t4")}</li></Link>
                    <Link to={"/contacts"}><li className='mt-[15px] text-center'>{t("t5")}</li></Link>
                </ul>
                <div className='flex justify-center mt-[20px]'>
                    <button className='bg-[#D74C20] px-[20px] py-[12px] rounded-[5px] text-[white]'>{t("t6")}</button>
                </div>
            </List>
            <Divider />
            <List>
                {['О компании', 'Новости', 'Отзывы', '+375 44 767 60 76', 'info@svai.by'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className='text-[black]'>
                        <MenuIcon onClick={toggleDrawer(anchor, true)} />
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
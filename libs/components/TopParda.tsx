import React, { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useRouter, withRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Stack, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CaretDown } from 'phosphor-react';
import Link from 'next/link';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Logout } from '@mui/icons-material';

const PardaTop = () => {
  const user = null;
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [lang, setLang] = useState<string | null>('en');
  const drop = Boolean(anchorEl2);
  const [colorChange, setColorChange] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<any | HTMLElement>(null);
  let open = Boolean(anchorEl);
  const [bgColor, setBgColor] = useState<boolean>(false);
  const [logoutAnchor, setLogoutAnchor] = React.useState<null | HTMLElement>(null);
  const logoutOpen = Boolean(logoutAnchor);

  /** LIFECYCLES **/
  // useEffect(() => {
  // 	if (localStorage.getItem('locale') === null) {
  // 		localStorage.setItem('locale', 'en');
  // 		setLang('en');
  // 	} else {
  // 		setLang(localStorage.getItem('locale'));
  // 	}
  // }, [router]);

  useEffect(() => {
    switch (router.pathname) {
      case '/property/detail':
        setBgColor(true);
        break;
      default:
        break;
    }
  }, [router]);


  /** HANDLERS **/
  const langClick = (e: any) => {
    setAnchorEl2(e.currentTarget);
  };

  const langClose = () => {
    setAnchorEl2(null);
  };

  const langChoice = useCallback(
    async (e: any) => {
      setLang(e.target.id);
      localStorage.setItem('locale', e.target.id);
      setAnchorEl2(null);
      await router.push(router.asPath, router.asPath, { locale: e.target.id });
    },
    [router],
  );

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHover = (event: any) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      top: '109px',
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 160,
      color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        },
      },
    },
  }));

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNavbarColor);
  }


  return (
    <>
      <Stack className="parda">
        <Box className="rectangle"></Box>
        <Stack className="circles">
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
          <Box className="circle"></Box>
        </Stack>

        <Stack className="overlay">

          <Link href={"/"} className='top-title'>
            <img src="/img/icons/delirvery.svg" alt="no image" />
            Free shipping with over 100$ purchase
          </Link>


          {!user ? (
            <>
              <Stack className="login-sign_button">
                <Button variant="outlined">Login</Button>
                <Button variant="outlined">Register</Button>
              </Stack>
            </>
          ) : (
            <>
              <Box component={"div"} className={"user-box"}>
                <>
                  <div className="login-user" onClick={(event: any) => setAnchorEl(event.currentTarget)}>
                    <img src={"/img/headerImages/defaultUser.svg"} alt="iui" />
                  </div>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        'aria-labelledby': 'basic-button',
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </>
              </Box>
            </>
          )}


          <div className={'lan-box'}>
            {user && <NotificationsOutlinedIcon className={'notification-icon'} />}
            <Button
              disableRipple
              className="btn-lang"
              onClick={langClick}
              endIcon={<CaretDown size={14} color="#616161" weight="fill" />}
            >
              <Box component={'div'} className={'flag'}>
                {lang !== null ? (
                  <img src={`/img/flag/lang${lang}.png`} alt={'usaFlag'} />
                ) : (
                  <img src={`/img/flag/langen.png`} alt={'usaFlag'} />
                )}
              </Box>
            </Button>

            <StyledMenu anchorEl={anchorEl2} open={drop} onClose={langClose} sx={{ position: 'absolute' }}>
              <MenuItem disableRipple onClick={langChoice} id="en">
                <img
                  className="img-flag"
                  src={'/img/flag/langen.png'}
                  onClick={langChoice}
                  id="en"
                  alt={'usaFlag'}
                />
                {t('English')}
              </MenuItem>
              <MenuItem disableRipple onClick={langChoice} id="kr">
                <img
                  className="img-flag"
                  src={'/img/flag/langkr.png'}
                  onClick={langChoice}
                  id="kr"
                  alt={'koreanFlag'}
                />
                {t('Korean')}
              </MenuItem>
              <MenuItem disableRipple onClick={langChoice} id="ru">
                <img
                  className="img-flag"
                  src={'/img/flag/langru.png'}
                  onClick={langChoice}
                  id="ru"
                  alt={'russiaFlag'}
                />
                {t('Russian')}
              </MenuItem>
            </StyledMenu>
          </div>




        </Stack>
      </Stack>
    </>
  )
}


export default PardaTop


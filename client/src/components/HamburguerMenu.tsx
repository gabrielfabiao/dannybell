import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import MenuIcon from '../assets/menu_icon.png'
import useScrollDirection from '@/utils/scroll-tracker';
import Image from 'next/image';
import "../app/aboutus.css"


type MenuListComposition = {
  navbar: Array<{ title: string; href: string; isExternal: boolean }>,
};

export default function MenuListComposition({
    navbar
}: MenuListComposition) {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const isScrollingDown = useScrollDirection()

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2} className='!font-Montserrat'>
      <Paper
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          height: '60px',
          background: 'transparent'
        }}
        elevation={0}
      >
        <MenuList
          sx={{ display: 'flex', flexDirection: 'row', p: 0 }}
        >
        {navbar.map((option, index) => (
          <MenuItem key={index} className={`group relative ${isScrollingDown ? '!grainy-bg' : '!bg-transparent'} !text-white !font-extralight !list-none !shadow-none flex transition-all duration-500 ease-in-out hover:!bg-white hover:!text-[#4d1313]`}>
            <a href={option?.href}><span className='mx-auto w-fit font-[lato] font-normal tracking-wider'>{option.title}</span></a>
          </MenuItem>
        ))}
        </MenuList>
      </Paper>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Image src={MenuIcon.src} alt="Menu" width={25} height={25}/>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper
                sx={{
                background: 'transparent'
                }}
                elevation={0}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    className='!bg-transparent !p-0 !m-0'
                  >
                    {navbar.map((option, index) => (
                      <MenuItem key={index} className="group relative !bg-[#4d1313] !text-white !font-extralight !list-none !shadow-none flex transition-all duration-500 ease-in-out hover:!bg-white hover:!text-[#4d1313] !rounded-md !mb-2">
                        <a href={option?.href}>
                          <span className='mx-auto w-fit !font-[Lato] font-normal'>{option.title}</span>
                        </a>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}

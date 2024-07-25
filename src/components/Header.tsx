"use client";

import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import { Notifications as NotificationsIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { H2Icon } from '@heroicons/react/16/solid';

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#263238', color: '#ffff', height: 80 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
            Hospital Equipment Management
          </Link>
        </Typography>
        <IconButton color="inherit" component={Link} href="/login" sx={{padding:2}}>
          Login
        </IconButton>
        <IconButton color="inherit" component={Link} href="/register" sx={{padding:2}}>
          Register
        </IconButton>
        <IconButton color="inherit" sx={{padding:2}}>
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <Avatar>
            <Image
              src="/assets/images/avatars/avatar_1.jpg"
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
            />
          </Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
"use client";

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, Avatar } from '@mui/material';
import { Dashboard as DashboardIcon, People as PeopleIcon, Build as BuildIcon, ListAlt as ListAltIcon, Settings as SettingsIcon } from '@mui/icons-material';
import Link from 'next/link';
import { alpha } from '@mui/material/styles';

export default function Sidebar() {
  return (
    <Drawer
       variant="permanent"
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500],0.12),
      }}
    >
      <Toolbar />
      <List sx={{ paddingTop: 8 ,paddingRight:4,paddingLeft:3}}>
        <ListItem button component={Link} href="/">
          <ListItemIcon>
            <DashboardIcon sx={{ color: '#3F4E4F' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} href="/users">
          <ListItemIcon>
            <PeopleIcon sx={{ color: '#3F4E4F' }} />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} href="/equipment">
          <ListItemIcon>
            <BuildIcon sx={{ color: '##3F4E4F' }} />
          </ListItemIcon>
          <ListItemText primary="Equipment" />
        </ListItem>
        <ListItem button component={Link} href="/forms">
          <ListItemIcon>
            <ListAltIcon sx={{ color: '##3F4E4F' }} />
          </ListItemIcon>
          <ListItemText primary="Forms" />
        </ListItem>
        <ListItem button component={Link} href="/responses">
          <ListItemIcon>
            <BuildIcon sx={{ color: '##3F4E4F' }} />
          </ListItemIcon>
          <ListItemText primary="Responses" />
        </ListItem>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <ListItem button component={Link} href="/settings">
          <ListItemIcon>
            <SettingsIcon sx={{ color: '#3F4E4F' }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Link,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const [apiKey, setApiKey] = useState('');
  const [users, setUsers] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchApiKey();
    fetchUsers();
  }, []);

  const fetchApiKey = async () => {
    try {
      const response = await axios.get('/admin/api-key');
      setApiKey(response.data);
    } catch (error) {
      console.error('Error fetching API key:', error);
    }
  };

  const updateApiKey = async () => {
    try {
      const newApiKey = prompt('Enter the new API key:');
      if (newApiKey) {
        const response = await axios.post('/admin/api-key', { key: newApiKey });
        alert(response.data);
        fetchApiKey();
      }
    } catch (error) {
      console.error('Error updating API key:', error);
    }
  };

  const deleteUser = async (chatId) => {
    try {
      const response = await axios.delete(`/users/${chatId}`);
      alert(response.data.message);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} sx={{ marginRight: 2 }}>
            {/* You can replace this with your own logo or icon */}
            🌦️
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button key="Dashboard" onClick={toggleDrawer(false)}>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Drawer>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', background: '#f3f3f3' }}>
        <Typography variant="h5" gutterBottom>
          Manage API Key
        </Typography>
        <Typography variant="body1" gutterBottom>
          Current API Key: {apiKey}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={updateApiKey}
          style={{ marginTop: '10px' }}
        >
          Update API Key
        </Button>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', background: '#f3f3f3' }}>
        <Typography variant="h5" gutterBottom>
          Current Users
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Chat ID</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.chatId}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.chatId}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => deleteUser(user.chatId)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography variant="body2" style={{ marginTop: '20px' }}>
        You can find the bot at:{' '}
        <Link
          href="https://telegram-link-to-bot"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1976D2', textDecoration: 'none' }}
        >
          https://telegram-link-to-bot
        </Link>
      </Typography>
    </Container>
  );
};

export default App;

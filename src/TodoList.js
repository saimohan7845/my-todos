import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, editTodo, removeTodo } from './todoActions';
import './TodoList.css';
import { AppBar, Toolbar,IconButton,Card,Typography,Link,Box, Breadcrumbs} from '@mui/material';
import { Stack } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const TodoList = ({ todos, addTodo, editTodo, removeTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [editing, setEditing] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');


  const handleAddTodo = () => {
    addTodo({ text: newTodo, id: Date.now() });
    if (newTodo !== null) {
        setNewTodo('');
      }
    
  };

  const handleEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveEditedTodo = () => {
    editTodo({ text: editText, id: editId });
    setEditId(null);
    setEditText('');
  };    

  const breadcrumbs = [
    <Link underline="hover" key="1" color="rgba(0,71,109,255)" href="/">
      Main Menu
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="rgba(0,71,109,255)"
      href="/material-ui/getting-started/installation/"
    >
      Submenu 1
    </Link>,
    <Link
    underline="hover"
    key="3"
    color="rgba(0,71,109,255)"
    href="/material-ui/getting-started/installation/"
  >
    Submenu 1
  </Link>,
    <Typography key="4" color="rgba(0,71,109,255)">
      Submenu 3
    </Typography>,
  ];

  return (
    <div className='App'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{margin:"10px 0 0 0",height:"60px", backgroundColor:"#002856"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon sx={{marginTop:"10px",color:"#f15d22"}}/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" fontWeight="bold" fontSize="24px" marginTop="10px">
            MDQ APPS
          </Typography>
        </Toolbar>
      </AppBar>

    <div className="Page">
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small"/>}
        aria-label="breadcrumb"
        style={{margin:"20px 0 0 27px", color:"#f15d22"}}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>

      <Card variant="outlined" style={{margin:"15px 10px 0 10px", minHeight:"75vh"}}>
      <Typography component="div" 
        style={{color: "rgba(0,71,109,255)", 
        textAlign:"center", 
        fontWeight:"bold", 
        fontSize:"28px",
        margin:"15px 0px"}}
        >
        <h2 className='title'><b>My Todos</b></h2>
      </Typography>
        <div className='card'>
        <div className="input-group mb-3">
          <input
            type="text"
            class="form-control"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
            placeholder="Add Something to do..."
            aria-label="Add Something to do..."
            aria-describedby="button-addon2"
          />
          <button onClick={handleAddTodo} className="btn btn-primary btn-sm mx-2" type="button" id="button-addon2">
            Save
          </button>
        </div>

     <ul className="list-group">
    {todos.map((todo) => (
    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center mt-2">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id={`checkbox-${todo.id}`} />
        <label className="form-check-label" htmlFor={`checkbox-${todo.id}`}>
          {editId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            todo.text
          )}
        </label>
      </div>
      <div>
        {editId === todo.id ? (
          <button onClick={handleSaveEditedTodo} className="btn btn-success btn-sm mx-2">
            Save
          </button>
        ) : (
          <button onClick={() => handleEditTodo(todo.id, todo.text)} className="btn btn-warning btn-sm mx-2">
            Edit
          </button>
        )}
        <button onClick={() => removeTodo(todo.id)} className="btn btn-danger btn-sm">
          Remove
        </button>
      </div>
    </li>
  ))}
</ul>
      </div>   
      <br/>
      </Card>
    </div>
    <div className="Footer"><p className='ft' style={{padding:5}}>@ Mdq Apps</p></div>
    </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, editTodo, removeTodo })(TodoList);

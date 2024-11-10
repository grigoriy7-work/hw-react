import { Button, TextField } from '@mui/material';
import { Store, userSlice } from './Store';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function UserBox() {
    type AppDispatch = typeof Store.dispatch;
    const dispatchUser = useDispatch<AppDispatch>();
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/10')
          .then(response => response.json())
          .then(data => {
            const { set } = userSlice.actions;
            let user = { name: data.name, username: data.username };
            dispatchUser(set(user)); 
          });
    }, [dispatchUser]);
  
    function clickHandler(): void {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {
          const { set } = userSlice.actions;
          dispatchUser(set({ name: data.name, username: data.username })); 
        });
    }
  
    type RootState = ReturnType<typeof Store.getState>;
    const user = useSelector((state: RootState) => state.users);
  
    return <>
     <div className='box-user'>
        <TextField label="Имя" variant="outlined" size='small' value={user.name} />
        <TextField label="Логин" variant="outlined" size='small' value={user.username} />
        <Button onClick={clickHandler} variant='contained'>получить данные</Button>
      </div>  
    </>    
}

export { UserBox }
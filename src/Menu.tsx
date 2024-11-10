import './App.css';
import { ButtonGroup, Button } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { UserBox } from './User';

function Pages() {
    const navigate = useNavigate();
    return <ButtonGroup variant='outlined' aria-label='меню' >
      <Button onClick={ () => navigate('/') }>Главная</Button>
      <Button onClick={ () => navigate('/list') }>Список дел</Button>
      <Button onClick={ () => navigate('*') }>Не найдена</Button>
    </ButtonGroup>
  }

  function Menu() {
    return <>
      <div className="box-menu">
        <Pages />
        <UserBox />
      </div>
    </>
  }

export { Menu }
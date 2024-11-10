import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Menu } from './Menu';
import { Store } from './Store';
import { NoteAdd, NoteList } from './Note';

function MainPage() {
  return <>
    <Menu />
    <NoteAdd />
    <NoteList />
  </>
}

function ListPage() {
  return <>
    <Menu />
    <NoteList />
  </>
}


function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/list" element={<ListPage/>} />
          <Route path="*" element={<h1>Страница не найдена!</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
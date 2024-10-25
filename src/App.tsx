import React from 'react';
import './App.css';

function App() {
  return (
    <Form />
  );
}

interface IUser {
  name: string;
  username: string;
  email: string;
}

function Form() {

  function fillForm(data:IUser):void {
    let form = document.querySelector<HTMLFormElement>('.box');
    if(form == null) return;

    form.querySelector<HTMLInputElement>('input[name="name"]')!.value = data.name;
    form.querySelector<HTMLInputElement>('input[name="username"]')!.value = data.username;
    form.querySelector<HTMLInputElement>('input[name="email"]')!.value = data.email;    
  }

  function clickHandler(): void {
    fetch('https://jsonplaceholder.typicode.com/users/10')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fillForm(data);
      });
  }

  return <>
   <form className='box'>
      <div>
        <label>Имя</label>
        <input name='name'></input>
      </div>
      <div>
        <label>Логин</label>
        <input name='username'></input>
      </div>
      <div>
        <label>Почта</label>
        <input name='email'></input>
      </div>      
    </form>
    <button onClick={clickHandler}>получить данные</button>
  </>
  
}

export default App;
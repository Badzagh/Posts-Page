import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//api fetch
/*fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if(response.ok){
          return response.json()
        } else {
          throw Error
        }
      })
      .then(json => 
        document.getElementById('root').innerHTML =
        JSON.stringify(json)
        ).catch(error => {
          console.log(error)
        })*/

  //asinc/await1
  /*async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let content = await response.json()
    content = content.splice(0, 4)

    let list = document.querySelector('.posts')

    let key;

    for (key in content) {
      
        list.innerHTML += `
        <li>
          <h4>${content[key].title}</h4>
          <p>${content[key].body}</p>
        </li>
      `
    }
  };

  getResponse();*/

  //async/await2
  /*async function getResponse() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if(!response.ok){
      throw new Error(`შეცდომა მისამართზე ${'https://jsonplaceholder.typicode.com/posts'}, სტატუსი შეცდომა ${response}`);
    } 

    return await response.json();
  }
  getResponse().then((data) => console.log(data))*/
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


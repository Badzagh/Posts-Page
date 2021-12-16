import { useState, useReducer } from "react"
import './App.css';


function reducer (state, action){
  switch(action.type){
    case 'editTitle':  
      return { 
          ...state,
          editTitle: action.payload
      }
    case 'editBody':  
      return { 
          ...state,
          editBody: action.payload
      }
    case 'id':  
      return { 
        ...state,
        id: action.value
    }
    case 'editForm':  
      return { 
        ...state,
        editForm: action.payload
    }
    default:
      return state
  }
}

function PostList(props) {
  const posts = props.posts

  const [state, dispatch] = useReducer(reducer, { editTitle: "", editBody: "" , id: 1, editForm: "edit-form-hidden"})

  var myPix = ["","https://randomwordgenerator.com/img/picture-generator/54e2d7404b52a514f1dc8460962e33791c3ad6e04e507441722872d5924fcd_640.jpg",
                  "https://randomwordgenerator.com/img/picture-generator/57e8d6474d57a514f1dc8460962e33791c3ad6e04e507440742f7cd7904bc4_640.jpg",
                  "https://www.asalesguy.com/wp-content/uploads/2016/09/dark-path-970882.jpeg",
                  "https://randompicturegenerator.com/img/people-generator/gbb18dc4db1059b5ef1f6c29a86a932f4600728d365ea6602329d861b0a2d6feeb7408ab798e0c87ddddf095809b8abc0_640.jpg",
                  "https://randomwordgenerator.com/img/picture-generator/57e4d5424850a914f1dc8460962e33791c3ad6e04e50744172297cd5914cc7_640.jpg",
                  "https://randomwordgenerator.com/img/picture-generator/57e5d1414952a914f1dc8460962e33791c3ad6e04e5074417c2d78d39644c5_640.jpg",
                  "https://randomwordgenerator.com/img/picture-generator/57e3d3474254a514f1dc8460962e33791c3ad6e04e50744172287ad2964cc0_640.jpg",
                  "https://randomwordgenerator.com/img/picture-generator/57e7d74a4855a814f1dc8460962e33791c3ad6e04e50744074267ad19644c0_640.jpg",
                  "https://randomwordgenerator.com/img/picture-generator/52e3d3454a52a914f1dc8460962e33791c3ad6e04e507440712f7bd5904ec6_640.jpg",
                  "https://randompicturegenerator.com/img/people-generator/gb4612c18d373b8d417f10aa4b359fd5fcd0c238fe9b1a09802c3d28817c9300f3c5c526faef7801f7c6c4333eba122c8_640.jpg"];

  const handleEditInputTitleChange = (e) => {
    dispatch({ type: "editTitle", payload: e.target.value})
  }

  const handleEditInputTextChange = (e) => {
    dispatch({ type: "editBody", payload: e.target.value})
  }


  const handleClickShow = (e) => {
    dispatch({ type: "editForm", payload: "edit-form-visible"})
    dispatch({ type: "id", value: e.target.value})
    console.log(e.target.value)
    console.log(state.id)
  }
  const handleClickClose = (e) => {
    dispatch({ type: "editForm", payload: "edit-form-hidden"})
    dispatch({ type: "id", value: 1})
    
  }

  const handleClickEdit = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${state.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: state.editTitle,
        body : state.editBody
        })
    })
    .then((response) => response.json())
    .then(() => window.location.reload())
  }
  

  return (
    <div className='post-list'>
      {posts.map(post => (
        <div key={post.id} className="post-list-item">
          <img src={myPix[post.id]} />
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <span>Wed jun 23 2021</span>
          <button onClick={handleClickShow} value={post.id}>Edit post</button>
        </div>
       ))}
       <div className={state.editForm}>
            <h4>Edit Post</h4>
            <input onChange={e => handleEditInputTitleChange(e)} type="text" value={state.editTitle}></input>
            <textarea onChange={e => handleEditInputTextChange(e)} type="text" value={state.editBody}></textarea>
            <button onClick={handleClickEdit}>CLICK TO EDIT</button>
            <span className='close-icon-left' onClick={handleClickClose}></span>
            <span className='close-icon-right' onClick={handleClickClose}></span>
       </div>
    </div>
  )
  
}

export default PostList;
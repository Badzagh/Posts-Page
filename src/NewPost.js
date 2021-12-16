import { useReducer } from "react";


function reducer (state, action){
  switch(action.type){
    case 'title':  
      return { 
          ...state,
          title: action.payload
      }
    case 'body':  
      return { 
          ...state,
          body: action.payload
      }
    default:
      return state
  }
}


function NewPost() {

  const [state, dispatch] = useReducer(reducer, { title: "", body: ""})

  const handleInputTitleChange = (e) => {
    dispatch({ type: "title", payload: e.target.value})
  }

  const handleInputTextChange = (e) => {
    dispatch({ type: "body", payload: e.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          body: JSON.stringify({
              userId: 10,
              title: state.title,
              body : state.body
              })
      };
      fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
          .then(response => {
            response.json()
            console.log(response, "request sucsess")
          })
          .then((data) => {

              console.log("post added")
          })
  }


  return (
    <div className="form-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input onChange={e => handleInputTitleChange(e)} id="title-value" type="text" value={state.title}></input>
        <label>Blog text:</label>
        <textarea onChange={e => handleInputTextChange(e)} type="text" id="text-value" value={state.body}></textarea>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  )
  
}

export default NewPost;
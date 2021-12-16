import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header-container'>
      <h1>OUR BLOGS</h1>
      <nav>
        <Link to="/Posts">Blog posts</Link>
        <Link to="/create">New Blog</Link>
      </nav>
    </div>
  )
  
}

export default Navbar;
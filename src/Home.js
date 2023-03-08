import React from 'react' 
import {Link,Outlet} from 'react-router-dom';
function Home() {
    return (
        <div>
           <nav>
        <Link to=""></Link>
        <Link to=""></Link>
      </nav>
      <Outlet />
        </div>
    )
}
    export default Home;
import { Link, NavLink } from "react-router-dom"
import { sidebarItems } from "../../../constants"


const Navbar = () => {
  return (
    <>
    <section className='nav-items'>
<Link to={'/'} className="link-logo">
<img src="/assets/icons/logo.svg" alt=""/>
<h1>TourTrek </h1>
</Link>


<nav className="container">
 {sidebarItems.map(({href,icon,id,label})=>{

    return <>
   <NavLink to={''} />
    
    </>
 })}


</nav>
    </section>
    </>
  )
}

export default Navbar

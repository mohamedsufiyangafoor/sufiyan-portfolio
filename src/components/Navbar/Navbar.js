import React,{useState} from 'react'
import Mobile from './mobile/mobile'
import  './Navbar.css'
import Web from './web/web'
function Navbar() {
    const [Open, setOpen] = useState(false);

    return (
        <div className="Navbar">
            <div className="logo">Sufiyan</div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick = {() => setOpen(!Open)}>
                    <i class="fi-rr-heart menu-icon"></i> 
                    </div>
                    {Open &&<Mobile Open={Open} setOpen={setOpen}/>}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
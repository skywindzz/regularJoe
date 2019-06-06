import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { FaCartArrowDown } from 'react-icon/fa'

export default function Navbar() {
    const [navbarOpen, navbarToggle] = useState(false);
    const [collapse, show] = useState('collapse navbar-collapse');
    const [links, navbarHandler] = useState(
        [
            {
                id: 1,
                path: '/',
                text: 'home'
            },
            {
                id: 2,
                path: '/about',
                text: about
            }
        ]
    )
        
    navbarHandler = () => { 
        console.log('testing')
    }
    render() {
      return (
            <div>
                navbar content
        </div>
    )
    }
}

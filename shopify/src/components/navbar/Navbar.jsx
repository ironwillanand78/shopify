import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li ><button><a href=""> Home  </a></button>  </li>
        <li ><button><a href="">Product</a></button></li>
        <li ><button><a href="">User </a></button>  </li>
        <li ><button><a href="">Contact</a></button></li>
        <li>
        <button>
            <a href=""><FontAwesomeIcon icon={faRightFromBracket} /></a>
        
        </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

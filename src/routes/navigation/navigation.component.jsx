import { Fragment,useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from '../navigation/crown.svg';
import { UserContext } from "../../context/user.context";
import { signout } from "../../utils/firebase/firebase.utils";

const Navigation =()=>{
    const{currentUser}=useContext(UserContext);
    console.log(currentUser);

  
    return(
        <Fragment> 
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Crwnlogo  className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser?
                           <span className="nav-link" to='/signin' onClick={signout}>
                           SIGN OUT 
                         </span>
                    :
                        <Link className="nav-link" to='/signin'>
                        SIGN IN
                      </Link>
                 }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;

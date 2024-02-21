import { HeaderContainer, LocationCartContainer, Location, Cart } from "./styles";
import  logo  from '../../assets/Logo.svg'
import MapPin from '../../assets/mappin.svg'
import cart from '../../assets/cart.svg'
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <HeaderContainer>
            
            <NavLink to='/' id="navlink">
               <img src={logo} alt=""/>
            </NavLink>
            
            <LocationCartContainer>
                <Location>
                    <img src={MapPin} alt="" />
                    <p>Porto Alegre, RS</p>
                </Location>
                <Cart>
                    <NavLink to='/checkout' id="navlink">
                       <img src={cart} alt="" />  
                    </NavLink>
                </Cart>
            </LocationCartContainer>
            
        </HeaderContainer>
    )
}
import { HeaderContainer, LocationCartContainer, Location, Cart, Logo } from "./styles";
import  logo  from '../../assets/Logo.svg'
import MapPin from '../../assets/mappin.svg'
import cart from '../../assets/cart.svg'
import { NavLink } from "react-router-dom";

export function Header() {
    return(
        <HeaderContainer>
            <Logo><img src={logo} alt="" /></Logo>
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
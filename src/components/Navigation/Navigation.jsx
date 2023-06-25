import { NavLink } from 'react-router-dom';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/auth/selectors';


const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </ul>

      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </nav>
  );
};

export default Navigation;

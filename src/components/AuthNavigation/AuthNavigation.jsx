import NavList from 'components/NavList/NavList';
import NavListItem from 'components/NavList/NavListItem/NavListItem';

const AuthNavigation = () => {
  return (
    <NavList>
      <NavListItem caption="Register" to="/register" />
      <NavListItem caption="Login" to="/login" />
    </NavList>
  );
};

export default AuthNavigation;

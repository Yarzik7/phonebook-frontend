import NavList from 'components/NavList/NavList';
import NavListItem from 'components/NavList/NavListItem/NavListItem';

const ContentNavigation = ({ isLoggedIn }) => {
  return (
    <NavList>
      <NavListItem caption="Home" to="/" />
      {isLoggedIn && <NavListItem caption="Contacts" to="/contacts" />}
    </NavList>
  );
};

export default ContentNavigation;

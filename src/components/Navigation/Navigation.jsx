import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import ContentNavigation from 'components/ContentNavigation/ContentNavigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <ContentNavigation isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </nav>
  );
};

export default Navigation;

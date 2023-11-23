import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import ContentNavigation from 'components/ContentNavigation/ContentNavigation';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <ContentNavigation isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <AuthNavigation />}
    </nav>
  );
};

export default Navigation;

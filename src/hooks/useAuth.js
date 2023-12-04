import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshingUser } from 'Redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshingUser);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

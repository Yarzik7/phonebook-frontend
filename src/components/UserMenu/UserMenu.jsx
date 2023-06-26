import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { selectUser } from 'Redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css['user-menu']}>
      <p className={css['user-email']}>{email}</p>
      <button className={css.button} onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

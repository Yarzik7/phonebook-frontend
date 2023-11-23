import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { selectUser } from 'Redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userMenu}>
      <div>
        <p className={css.userName}>{name}</p>
        <p className={css.userEmail}>{email}</p>
      </div>
      <button className={css.button} onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

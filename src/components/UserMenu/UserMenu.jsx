import { useDispatch, useSelector} from "react-redux";
import { logOut } from "Redux/auth/operations";
import { selectUser } from "Redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const {email} = useSelector(selectUser)

  const handleLogOut = () => {
    dispatch(logOut());
  }

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;

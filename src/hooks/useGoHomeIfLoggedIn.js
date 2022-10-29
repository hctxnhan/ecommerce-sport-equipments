import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice';
import { useNavigate } from 'react-router-dom';
export default function useGoHomeIfLoggedIn() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  if (user) {
    navigate('/');
  }
}

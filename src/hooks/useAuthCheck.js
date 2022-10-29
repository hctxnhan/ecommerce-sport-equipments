import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../redux/features/userSlice';

export default function useAuthCheck() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
  }
}

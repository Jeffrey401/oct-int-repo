import '../styles/login.css';
import { useApi } from '../hooks/use-api';

function Login() {
  const { response } = useApi();

  return (
    <div className="Login">

        <h3> Hellowsss</h3>
      </div>
  );
}

export default Login;

import {usePrivy} from '@privy-io/react-auth';
import { useEffect } from 'react';

interface LoginButtonProps {
  handleLogin: (res:boolean) => void;
  handleReady: (res:boolean) => void;
  useLogin: boolean;
}

function LoginButton({handleLogin, useLogin, handleReady}: LoginButtonProps) {
  const {ready, authenticated, login, logout} = usePrivy();

  useEffect(() => {
    handleReady(ready)
  }, [ready]);

  useEffect(() => {
    handleLogin(authenticated)
  }, [authenticated]);


  return (
    <>
    {ready ? <button onClick={useLogin ? login : logout}>
      {useLogin ? "Log In" : "Log Out"}
    </button> : null}
    </>
  );
}

export default LoginButton;
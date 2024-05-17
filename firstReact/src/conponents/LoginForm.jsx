import { useState } from 'react';
import { useUserContext } from '../context/UserContext';
function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { currentUser, handleUpdateUser } = useUserContext();
  const onSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({ userEmail, userPassword });
  };
  return (
    <>
      {currentUser.userEmail ? (
        <>
          <p>Welcome {currentUser.userEmail}!</p>
        </>
      ) : (
        <>
          <form className="LoginForm componentBox" onSubmit={onSubmit}>
            <div className="formRow">
              <label>
                Email Address:
                {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
                <input
                  type="email"
                  value={userEmail}
                  name="userEmail"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="formRow">
              <label>
                Password:
                <input
                  type="password"
                  value={userPassword}
                  name="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </label>
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;

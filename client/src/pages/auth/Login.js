import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertMessage from '../../components/alert/AlertMessage';
import { login } from '../../redux/actions/authActions';
import './Login.css'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.userLogin)
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    return (
        <body className="text-center">
            <main className="form-signin">
                {error && <AlertMessage error={error} />}
                <form onSubmit={handleLogin}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </body>
    );
}

export default Login;
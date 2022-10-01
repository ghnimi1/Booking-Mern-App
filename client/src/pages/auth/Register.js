import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertMessage from '../../components/alert/AlertMessage';
import { register } from '../../redux/actions/authActions';
import './Register.css'

function Register(props) {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.userRegister)
    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(register({ userName, email, password, country, city, phone }))
    }

    return (
        <main className="form-register">
            <div>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                <div className="form-floating">
                    <input type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        className="form-control" id="floatingUserName" placeholder="UserName" />
                    <label for="floatingUserName">UserName</label>
                    {error?.userName && <AlertMessage error={error.userName} />}
                </div>
                <div className="form-floating">
                    <input type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                    {error?.email && <AlertMessage error={error.email} />}
                </div>
                <div className="form-floating">
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                    {error?.password && <AlertMessage error={error.password} />}
                </div>
                <div className="form-floating">
                    <input type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="form-control" id="floatingInput" placeholder="Phone Number" />
                    <label for="floatingInput">Phone</label>
                    {error?.phone && <AlertMessage error={error.phone} />}
                </div>

                <div className="form-floating">
                    <input type="text"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        className="form-control" id="floatingInput" placeholder="Country" />
                    <label for="floatingInput">Country</label>
                    {error?.country && <AlertMessage error={error.country} />}
                </div>
                <div className="form-floating">
                    <input type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="form-control" id="floatingPassword" placeholder="City" />
                    <label for="floatingPassword">City</label>
                    {error?.city && <AlertMessage error={error.city} />}
                </div>
                <button onClick={handleRegister} className="w-100 btn btn-lg btn-primary" >Sign in</button>
            </div>
        </main>
    );
}

export default Register;
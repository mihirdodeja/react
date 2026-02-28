import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, Slide } from 'react-toastify'

const Register = () => {

    const redirect = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    function Regist(e) {

        e.preventDefault()  

        if (!username || !password || !email || !mobile) {
            toast.error("Please Enter Data to Submit !")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters!")
            return
        }

        if (!email.includes("@")) {
            toast.error("Enter valid email address!")
            return
        }

        const userData = {
            username,
            password,
            email,
            mobile
        }

        console.log("Registered Data:", userData)

        toast.success("Registration Successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
            transition: Slide,
        })

        setTimeout(() => {
            redirect('/login')
        }, 1000)
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 my-5 p-5 shadow">

                    <form onSubmit={Regist}>
                        <h3 className="text-center mb-4">Registration Form</h3>

                        <div className="mt-3">
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="form-control"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="email"
                                placeholder="Enter your Email Address"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mt-3">
                            <input
                                type="tel"
                                placeholder="Enter your Mobile Number"
                                className="form-control"
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>

                        <div className="mt-4 text-center d-flex gap-2">
                            <button
                                className="btn btn-dark w-50"
                                type='submit'
                            >
                                Register
                            </button>

                            <NavLink
                                to="/login"
                                className="btn btn-success text-white w-50"
                            >
                                Login
                            </NavLink>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register
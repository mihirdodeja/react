import { useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css'
import { dec, inc, incBy5Data } from "../features/counterSlice"
import "./Counter.css"

const Counter = () => 
{
    const {count} = useSelector(state => state)
    const dispatch = useDispatch()

    function addition()
    {
        dispatch(inc())
    }
    function subtract()
    {
        dispatch(dec())
    }
    function incBy5()
    {
        dispatch(incBy5Data(5))
    }
    function decBy5()
    {
        dispatch(incBy5Data(-5))
    }

    return (
        <>
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8">
                            <div className="counter-card card border-0 shadow-lg rounded-4 overflow-hidden">
                                {/* Header Section */}
                                <div className="card-header-premium">
                                    <div className="header-background">
                                        <div className="header-shapes"></div>
                                    </div>
                                    <div className="header-content">
                                        <div className="header-icon">📊</div>
                                        <h1 className="header-title">Counter App</h1>
                                        <div className="header-divider"></div>
                                        <p className="header-subtitle">Manage your count efficiently</p>
                                        <div className="header-stats">
                                            <div className="stat-badge">
                                                <span className="badge-label">Current</span>
                                                <span className="badge-value">{count}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Counter Display */}
                                <div className="card-body p-5 text-center">
                                    <div className="counter-display mb-5">
                                        <div className="display-count">
                                            {count}
                                        </div>
                                        <p className="text-muted small mt-3 mb-0">Made by Mihir using React-Redux-Toolkit</p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="d-flex flex-column gap-3 mb-4">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <button 
                                                    onClick={addition} 
                                                    className="btn btn-success btn-lg w-100 fw-bold rounded-3 button-hover"
                                                >
                                                    <span className="fs-5">+</span>
                                                    <div className="small">Increment</div>
                                                </button>
                                            </div>
                                            <div className="col-6">
                                                <button 
                                                    onClick={subtract} 
                                                    className="btn btn-danger btn-lg w-100 fw-bold rounded-3 button-hover"
                                                >
                                                    <span className="fs-5">−</span>
                                                    <div className="small">Decrement</div>
                                                </button>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={incBy5} 
                                            className="btn btn-primary btn-lg w-100 fw-bold rounded-3 button-hover"
                                        >
                                            ⚡ Add 5 to Counter
                                        </button>
                                        <button 
                                            onClick={decBy5} 
                                            className="btn btn-warning btn-lg w-100 fw-bold rounded-3 button-hover"
                                        >
                                            ⚡ Minus 5 from Counter
                                        </button>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="card-footer bg-light border-0 p-3 text-center">
                                    <small className="text-muted">Click buttons to manage your counter</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
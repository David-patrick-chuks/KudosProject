

import { useContext, useState } from "react";
import { GlobalContext } from "../utils/Context.jsx";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);  // To toggle between login and signup

    const { loginUser, signupUser } = useContext(GlobalContext);  // Assuming signupUser is available

    // Toggle between Login and Sign-up forms
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>

                <form onSubmit={e => e.preventDefault()}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    {!isLogin && (
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm your password"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        onClick={() => {
                            isLogin ? loginUser(email, password) : signupUser(email, password);
                        }}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    {isLogin ? (
                        <>
                            Don't have an account?{" "}
                            <span onClick={toggleForm} className="text-blue-500 hover:underline cursor-pointer">
                                Sign up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span onClick={toggleForm} className="text-blue-500 hover:underline cursor-pointer">
                                Login
                            </span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Login;

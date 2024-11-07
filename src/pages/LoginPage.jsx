import LoginForm from "../component/LoginForm";

const LoginPage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="container max-w-md mx-auto p-8">
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                    <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/pokeball-science-fiction-device-AvOM4k9-600.jpg" className="h-48 w-48 mx-auto"></img>

                    {/* <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none"
                        >
                            Login
                        </button>
                    </form> */}

                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


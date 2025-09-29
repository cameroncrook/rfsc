export default function Login() {
    return (
        <div>
            <div className="flex flex-col items-center space-y-2 text-center">
                <span className="h-8 w-8 text-primary material-symbols-outlined">lock_person</span>
                <h1 className="text-3xl font-bold">Coaches Portal</h1>
                <p className="text-gray-500">Welcome! Register your new account.</p>
            </div>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                    <div className="mt-1">
                        <input className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="password" name="password" type="password" required />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="confirm">Password</label>
                    <div className="mt-1">
                        <input className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="confirm" name="confirm" type="password" required />
                    </div>
                </div>
                <div>
                    <button className="flex w-full justify-center rounded-lg bg-primary py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
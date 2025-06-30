
export const Sidebar = () => {
    return (
        <aside id="default-sidebar" className="fixed top-0 border-r-1 border-gray-200 left-0 z-40 w-36 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a
                            href="/dashboard"
                            className="flex flex-col items-center justify-center h-20 p-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 group transition-all"
                        >
                            <svg className="w-6 h-6 mb-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" /></svg>
                            <span className="text-xs text-center">Dashboard</span>
                        </a>

                    </li>
                    <li>
                        <a
                            href="/campaigns"
                            className="flex flex-col items-center justify-center h-20 p-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 group transition-all"
                        >
                            <svg className="w-6 h-6 mb-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z" /></svg>

                            <span className="text-xs text-center">Campaigns</span>
                        </a>

                    </li>
                    <li>
                        <a
                            href="/users"
                            className="flex flex-col items-center justify-center h-20 p-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 group transition-all"
                        >
                            <svg className="w-6 h-6 mb-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" /></svg>
                            <span className="text-xs text-center">Users</span>
                        </a>

                    </li>

                </ul>
            </div>
        </aside>
    )
}

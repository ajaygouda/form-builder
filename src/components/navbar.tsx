
export const Navbar = ({ name, isSearch }: { name: string, isSearch: boolean }) => {
    return (
        <div className="flex justify-between items-center h-18 py-3">
            <h1 className="text-xl font-medium flex items-center gap-4">{name}</h1>
            {isSearch && <div className="w-120 ">
                <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border rounded-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
            </div>}
        </div>
    )
}

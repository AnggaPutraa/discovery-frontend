
const Footer = () => {
    return (
        <footer className="w-full p-8 flex flex-col justify-center items-center space-y-2 max-w-7xl mx-auto">
            <div className="border-b border-gray-500 dark:border-gray-400 w-full pt-4" />
            <h1 className="text-black dark:text-white text-2xl font-bold">Discovery</h1>
            <h1 className="text-gray-500 dark:text-gray-400">©2023 Discovery. All Rights Reserved.</h1>
            <img
                src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/github-icon.svg"
                alt="Gitub source code"
                className="h-8 w-8 dark:bg-white dark:rounded-full dark:outline-white cursor-pointer"
            />
        </footer>
    );
}

export default Footer;
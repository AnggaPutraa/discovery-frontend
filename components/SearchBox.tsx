'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBox = () => {
    return (
            <form className="flex items-center rounded-full border mt-6">
                <input
                    type="text"
                    className="bg-transparent w-full outline-none text-white px-4 py-2 placeholder-gray-400"
                    placeholder="Search something ..."
                />
                <button type="submit">
                    <MagnifyingGlassIcon
                    className='h-8 w-8 pr-4 my-2rounded-full text-white'
                    />
                </button>
            </form>
    );
}

export default SearchBox;
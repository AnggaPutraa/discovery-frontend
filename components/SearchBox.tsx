'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const SearchBox = () => {
    const [input, setInput] = useState('')
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        router.push(`/search?term=${input}`)
    }

    return (
        <form 
        onSubmit={handleSearch}
        className="flex items-center rounded-full border mt-6"
        >
            <input
                type="text"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                className="bg-transparent w-full outline-none text-white px-4 py-2 placeholder-gray-400"
                placeholder="Search something ..."
            />
            <button
                type="submit"
                disabled={!input}
            >
                <MagnifyingGlassIcon
                    className='h-8 w-8 pr-4 my-2rounded-full text-white disabled:text-gray-600 disabled:cursor-not-allowed'
                />
            </button>
        </form>
    );
}

export default SearchBox;
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { filterByCountry, filterUsersByName } from '../store/actions/users';

const countryOptions = [
    { value: 'AU', label: 'Australia' },
    { value: 'BR', label: 'Brasil' },
    { value: 'CA', label: 'Canada' },
    { value: 'CH', label: 'Chezc Republic' },
    { value: 'DE', label: 'Germany' },
    { value: 'DK', label: 'Denmark' },
    { value: 'ES', label: 'Spain' },
    { value: 'FI', label: 'Finland' },
    { value: 'FR', label: 'France' },
    { value: 'GB', label: 'Grain Britain' },
    { value: 'IE', label: 'Ireland' },
    { value: 'IR', label: 'Iran' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'NZ', label: 'New Zeland' },
    { value: 'TR', label: 'Turkey' },
    { value: 'US', label: 'United states' }
]


const Header: FC<{}> = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [country, setCountry] = useState<any>([]);


    useEffect(() => {

        dispatch(filterUsersByName(name))

        // eslint-disable-next-line
    }, [name])


    useEffect(() => {

        dispatch(filterByCountry(country))

        // eslint-disable-next-line
    }, [country])


    return (
        <div className="hero">

            <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                <h1 className=" font-bold text-3xl text-gray-900">Satoshi's Game Test</h1>
                <p className=" font-base text-base text-gray-600">by Juan D. Sevillano</p>
            </div>

            <div className="box pt-6 flex w-full items-center justify-center space-x-4">
                <div className="bg-white rounded flex items-center w-80  p-3 shadow-sm border border-gray-200">
                    <button
                        className="outline-none focus:outline-none">
                        <svg className=" w-5 text-gray-600 h-5 cursor-pointer"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                            </path>
                        </svg>
                    </button>
                    <input
                        onChange={(e) => {
                            const { value } = e.target;
                            setName(value);
                        }}
                        value={name}
                        type="search"
                        name="name"
                        id="filter users"
                        placeholder="Search by name"
                        x-model="q"
                        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                </div>
                <Select
                    onChange={val => setCountry(val)}
                    value={country}
                    isMulti
                    className="w-80 h-full"
                    options={countryOptions} />
            </div>
        </div>
    )
}

export default Header
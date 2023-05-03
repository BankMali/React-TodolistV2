import { useTodo } from '../hooks/useTodo';
import { FaHome, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import UserPhoto from '../assets/user.jpg'
import { Avatar } from '@mui/material';

// Function Component
export function Header() {
    // React HOOK
    const { searchTodo } = useTodo(); // *3
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        searchTodo(e.target.value); // *edit
    };
    return (
        <header className='header'>
            <span className='header__icon'>
                <FaHome size={25} color='white' />
            </span>
            <h1>Todoist-Bank</h1>
            <div className='header__search__container'>
                <span className='header__search__icon'>
                    <FaSearch />
                </span>
                <input
                    type='text'
                    className='header__search__input'
                    placeholder='search'
                    onChange={handleChange}
                    value={searchValue}
                />
            </div>
            <div>
                <Avatar src={UserPhoto} alt="user-profile"  sx={{width:40,height:40, cursor: 'pointer'}}/>
            </div>
        </header>
    );
}
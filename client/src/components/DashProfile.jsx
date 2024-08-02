import { Alert, Button, Modal, ModalBody, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';


export default function DashProfile() {
    const {currentUser} = useSelector(state => state.user)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <div className='w-32 h-32 self-center cursor-pointer shadow-md over-flow-hidden rounded-full'>
            <img
            src={currentUser.profilePicture} alt="user"
            className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'
            />
            </div>
            <TextInput
            type='text'
            id='username'
            placeholder='username'
            defaultValue={currentUser.username}
            />
            <TextInput
            type='email'
            id='email'
            placeholder='email'
            defaultValue={currentUser.email}
            />
            <TextInput
            type='password'
            id='password'
            placeholder='password'
            />
            <Button
            type='submit'
            gradientDuoTone='purpleToBlue'
            outline
            >
                Update
            </Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>
          Delete Account
        </span>
        <span className='cursor-pointer'>
          Sign Out
        </span>
      </div>
    </div>
  )
}

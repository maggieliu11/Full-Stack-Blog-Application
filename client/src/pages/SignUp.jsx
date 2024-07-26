import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className="flex-1">
        <Link to="/" 
          className="font-bold dark:text-white text-4xl"
        >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 
          via-purple-500 to-pink-500 rounded-lg text-white'>
              Maggie's
            </span>
          Blog
        </Link>
        <p className='text-sm mt-5'>
            This is a small project of mine. You can sign up with your email and password
            or with Google.
        </p>
      </div>
      {/* right */}
      <div className="flex-1">
      <form className='flex flex-col gap-4'>
          <div>
            <Label value='Your username' />
            <TextInput
              type='text'
              placeholder='Username'
              id='username' />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput
              type='text'
              placeholder='Email'
              id='email' />
          </div>
          <div>
            <Label value='Your passord' />
            <TextInput
              type='text'
              placeholder='Password'
              id='Password' />
          </div>
          <Button 
          type="submit"
          //size="lg"
          className="flex items-center justify-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-indigo-500"
          //style={{ width: '200px', height: '50px' }}
          >
          Sign Up
          </Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
      </div>
    </div>
  </div>;

  
}
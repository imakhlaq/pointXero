import Link from 'next/link';

const LogInPage = () => {
  return (
    <main>
      <div className='container relative mx-auto my-32 flex max-w-xl flex-col px-6 text-gray-900 justify-center '>
        <div className='flex flex-col gap-7 px-14 py-24 bg-gradient-to-r from-gray to-slate-700 mt-14 rounded-lg'>
          <h2 className=' font-semibold text-2xl mb-9'>Sign In</h2>
          <input
            type='text'
            className='bg-black max-w-xs px-3 py-2 rounded-md bg-transparent text-whiteText focus-within:bg-none focus:outline-none'
            placeholder='Username'
          />
          <input
            type='password'
            className='bg-black max-w-xs px-3 py-2 rounded-md bg-transparent text-whiteText focus-within:bg-none focus:outline-none'
            placeholder='Password'
          />
          <div className='flex  items-center gap-2'>
            <input
              type='checkbox'
              id='remember'
              className='accent-greenColor bottom-0 rounded-sm'
            />
            <label htmlFor='remember'>Remember Me </label>
          </div>
          <button className='bg-greenColor max-w-xs py-2 px-4 rounded-md text-whiteText font-bold '>
            Sign In
          </button>

          <div className='flex justify-center items-center gap-2'>
            <div className='h-[1px] w-32 bg-black '></div>
            <p>or</p>
            <div className='h-[1px] w-32 bg-black '></div>
          </div>

          <div>{/* for google */}</div>

          <Link href='/signup' className='text-center mt-10'>
            Don&apos;t have Account? Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};
export default LogInPage;

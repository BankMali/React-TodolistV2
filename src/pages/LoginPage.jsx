import AuthPhoto from '../assets/auth.png'


function LoginPage() {
    return (
      <div className='h-screen flex'>
      <div className='flex-1 flex items-center justify-center max-lg:hidden'>
      <div className='p-16'>
        <img src={AuthPhoto} alt='banner' className='w-full'></img>
      </div>
      
      </div>

      {/* right */}
      <div className='flex-1 flex items-center justify-center'>
        <div className='m-[100px] flex flex-col gap-8 w-[80%]'>
        <h1 className="text-8xl font-bold mb-8">Login</h1>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Example@mail.com" className="p-4 text-4xl outline-none rounded-lg border-2"/>
          <input type="password" placeholder="Password" className="p-4 text-4xl outline-none rounded-lg border-2"/>
          <button type="submit" className="p-4 text-4xl bg-[#db4c3f] text-white rounded-lg mt-4 hover:bg-red-600">Login</button>
        </form>
        <div className="flex gap-4">
            <p className="text-xl text-gray-500 hover:text-[#db4c3f] cursor-pointer font-bold">forgot password ?</p>
            <p className="text-xl text-gray-500">Dont have an account ? <span className="hover:text-[#db4c3f] cursor-pointer font-bold"> Go to sign uo</span></p>
        </div>
        </div>

      </div>
    </div> 
    )
  }
  
  export default LoginPage
  
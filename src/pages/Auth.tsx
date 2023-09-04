import Input from "../components/global/Input"

function Auth({ isLogin } : {isLogin : boolean}) {

  return (
    <div className='flex place-content-center place-items-center mx-auto'>
        <div className='w-1/2 min-h-screen   flex place-content-center place-items-center'>
            <form className='px-12 pt-6 pb-8 w-full' >
                <div className='text-gray-800 text-2xl font-black flex justify-center border-b-2 border-gray-800 py-2 mb-6'>
                    {
                      isLogin ? "Login" : "Register"
                    }
                </div>
                <div>
                    <div className='flex justify-center mb-4'>
                        <div className='w-20 h-20 bg-blue-500 rounded'>
                            
                        </div>
                    </div>
                </div>
                    <Input type="text" placeholder="Username" id="username" text="Username" className="" />
                    <Input type="password" placeholder="•••••••••••" id="Password" text="Password" className="" />
                    {
                        !isLogin && 
                        <Input type="password" placeholder="•••••••••••" id="ConfirmPassword" text="Confirm Password" className="" />
                    }
                {/* <div className='flex items-center justify-between'>
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        Connection
                    </button>
                </div> */}
            <p className='text-center text-gray-500 text-xs'>
                &copy;2023 Elkhiari. All rights reserved.
            </p>
            </form>
        </div>
        <div className='w-1/2 min-h-screen bg-blue-200'>
            <form className='bg-white shadow-2xl  rounded px-12 pt-6 pb-8 mb-4' >
                <div className='text-gray-800 text-2xl font-black flex justify-center border-b-2 py-2 mb-4'>
                    Register
                </div>
              </form>
          </div>
    </div>
  )
}

export default Auth
function SignUp(){
    return(<div className="min-h-4 font-quicksand">
 <h1 className="mt-6 uppercase h-12 font-bold text-3xl sm:text-lg sm:p-2 pl-3 p-1 bg-primary-red-color w-full text-primary-white-color">Sign Up</h1>
    <div className="flex flex-col items-center mt-20">
        <div className="flex flex-col gap-6 w-fit items-end">
        <label className="text-primary-white-color">
            First Name:  
            <input type="text" name="firstname" placeholder="First Name" className="ml-4 h-10 pl-2 w-60"/>
        </label>
         <label className="text-primary-white-color">
            Last Name:  
            <input type="text" name="lastname" placeholder="Last Name" className="ml-4 h-10 pl-2 w-60"/>
        </label>
        
         <label className="text-primary-white-color">
            E-Mail:  
            <input type="email" name="email" placeholder="E-Mail" className="ml-4 h-10 pl-2 w-60"/>
        </label>
        <label className="text-primary-white-color">
            Password:  
            <input type="password" name="password" placeholder="Password" className="ml-4 h-10 pl-2 w-60"/>
        </label>
        <button className="self-start bg-primary-red-color w-20 h-9 rounded-2xl active:scale-95 text-primary-white-color">Sign Up</button>
    </div>
    </div>
    </div>)
}
export default SignUp;
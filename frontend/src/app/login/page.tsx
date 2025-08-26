export default function Login() {
        return(
                 <div className="w-screen h-screen bg-[#219427] flex items-center">
                        <div className="shadow-xl/20 bg-[#41c547] m-auto w-[670] h-[300] rounded-xl p-2 justify-center">
                        <input type="email" placeholder="mail@site.com" required />
                        <input
    type="password"
    required
    placeholder="Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />

                        </div>
                    </div>
             

        );


        
}
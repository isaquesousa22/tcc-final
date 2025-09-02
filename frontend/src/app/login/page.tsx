export default function Login() {
        return(
                 <div className="w-screen h-screen bg-[#219427] flex items-center">
                        <div className="shadow-xl/20 bg-[#41c547] m-auto w-[670] h-[300] rounded-xl p-2 justify-intems-center">
                        <input className="mb-10 mt-10 input input-lg w-162 h-10 rounded-xl input input-neutral" type="email" placeholder="mail@site.com" required />
                        
                <input className="mb-5 mt-1 input input-lg w-162 h-10 rounded-xl input input-neutral"
                         type="password"
                         required
                         placeholder="Password"
                         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                         title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"  />

                         <button className="shadow-xl bg-[#3E704D] w-[650] h-[40] border-2 rounded-xl hover:bg-[#3e704dad] mt-4">
                                Logar
                         </button>
                          <a className="text-xs text-center " href="/cadastro">Não tenho cadastro</a>

                        </div>

                        

                    </div>
             

        );


        
}
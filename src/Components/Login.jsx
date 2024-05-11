import '../App.css';

export default function Login({setLogin}){
    function inpt (){
        alert('This feature is not yet supported.')
    }
    return (
        <div className="Login">
             <div className="inputs">
              <input type="text" placeholder='Full Name' />
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Password' />
            </div>
            <i onClick={()=>setLogin(false)} class="fa-solid fa-xmark"></i>
            <button onClick={inpt}>Login</button>
        </div>
    )
}
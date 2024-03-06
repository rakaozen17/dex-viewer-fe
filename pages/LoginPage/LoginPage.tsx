import React, { useState } from 'react'
import './Login.css'


export interface login {
    username:string,
    password:string
}
const LoginPage = () => {

    const [formValues, setFormValues] = useState<login>({
        username: '',
        password: ''
      });
    // const { data, error, mutate } = useSWR(['/v1/users/login', formValues], auth);

    // const handleSubmit = (e:React.FormEvent) => {
    //     e.preventDefault()
    //     try{
    //       const response = auth('/v1/users/login', formValues);
    //       response.then(res => console.log(res.code))
    //     }catch(err){
    //       console.log(err)
    //     }
    // }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value})
    }
    return (
        <div className="login-page">
          <div className="card">
            <div className="login-image">
                <img src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40515/vecteezy_background-red_fj0121_generated.jpg" alt="Login" style={{ width: '100%', height:'100%' }} />
            </div>
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={(e) => console.log('whatever')}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={formValues.username} placeholder="Enter Username" onChange={(e) => handleChange(e)}/>
    
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formValues.password} placeholder="Enter Password" onChange={(e) => handleChange(e)}/>
    
                <input type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      );
}

export default LoginPage
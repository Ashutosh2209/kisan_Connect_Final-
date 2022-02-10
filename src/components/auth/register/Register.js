import React, { useState,useEffect } from 'react'
import { clearErrors, login, register } from "../../../actions/userAction";
import { useDispatch,useSelector } from "react-redux";




const Register = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const dispatch = useDispatch();
  const isAuthenticated  = useSelector(
    (state) => state.users
  );

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  }

  const registerDataChange = (e) => {
    
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  useEffect(() => {
        
    if (isAuthenticated) {
        register();
       // history.push("/account");
    }
  }, [dispatch,  isAuthenticated]);
  
  return <div><div className="banner-top">
  <div className="container">
      <h3>Register</h3>
      <h4><a href="/">Home</a><label>/</label>Register</h4>
      <div className="clearfix"> </div>
  </div>
</div>
{/*login*/}
<div className="login">
  <div className="main-agileits">
      <div className="form-w3agile form1">
          <h3>Register</h3>
          <form action="#" method="post" onSubmit={registerSubmit}>
              <div className="key">
                  <i className="fa fa-user" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                  <div className="clearfix" />
              </div>
              <div className="key">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                  <div className="clearfix" />
              </div>
              <div className="key">
                  <i className="fa fa-lock" aria-hidden="true" />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                  <div className="clearfix" />
              </div>
              {/* <div className="key">
                  <i className="fa fa-lock" aria-hidden="true" />
                  <input type="password" defaultValue="Confirm Password" name="Confirm Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}" required />
                  <div className="clearfix" />
              </div> */}
              <input type="submit" defaultValue="Submit" />
          </form>
      </div>
  </div>
</div></div>;
};

export default Register;


// export default class Register extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>

//         )
//     }
// }

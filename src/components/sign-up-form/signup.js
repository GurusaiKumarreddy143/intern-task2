import React from 'react';
import { useFormik } from 'formik';
import TabsComponent from './tabsList/tab1'

export default function SignupForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
   
  });

  console.log(formik.values)
  const [value, setValue] = React.useState(0);
  return (
    <div className='App'>
     
      <form className="align-properly" >
        <TabsComponent {...{value,setValue}} />
        <h1>Tech Guru website</h1>
        <hr style={{width:"80%",textAlign:"center",marginLeft:"20",marginBottom:"50px"}}></hr>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label style={{textAlign:"start"}} htmlFor="Enterpassword">Enter Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <label style={{textAlign:"start"}} htmlFor="newpassword">confirm Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <checkbox sx={{color:"white"}}>Remember later</checkbox>
        <button type="submit">Login</button>
        <p className="footer">Powered by B.gurusai</p>
      </form>
    </div>
  );
}

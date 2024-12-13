import React from 'react';
import { useFormik } from 'formik';
import TabsComponent from './tabsList/tab1';


export default function SampleForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
   
  });

  console.log(formik.values)
  const [value, setValue] = React.useState(0);
  if (value === 0){
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
        <label style={{textAlign:"start"}} htmlFor="password">Your Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">Login</button>
        <p className="footer">Powered by B.gurusai</p>
      </form>
      
    </div>
  );
}else{
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
<div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
  <span>
    <input
      type="checkbox"
      style={{ color: "white", border: "1px solid white", margin: "0", padding: "0" ,marginLeft:"-90px" , }}
    />
  </span>
  <p style={{ margin: "0", padding: "0", marginLeft:"-70px" }}>Remember</p>
</div>

  
  
  <button type="submit">Login</button>
  <p className="footer">Powered by B.gurusai</p>
</form>
</div>
  );
}
}

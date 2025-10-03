import "./LoginModel.css"
const LoginModel = () => {
  return (
    <div className="text-center">
      <h2 className="login-title">Workasana</h2>
      <p className="login-description">Log in to your account</p>
      <p className="login-details">Please enter your details.</p>
      <div>
        <form action="">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="" id="email" placeholder="Enter your email"/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="" id="password" placeholder="Password"/>
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
};
export default LoginModel;

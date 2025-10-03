const LoginModel = () => {
  return (
    <>
      <h2>Workasana</h2>
      <p>Log in to your account</p>
      <p>Please enter your details.</p>
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="email"
              name=""
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
            />
          </div>
          <button>Sign up</button>
          <p>Already have an account? <a href="">Login</a></p>
        </form>
      </div>
    </>
  );
};
export default LoginModel;
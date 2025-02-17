import { Link } from "react-router-dom";

const Login = () => {
   const handleLogIn = (e)=>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password)
   }


  return (
    <div className="max-w-screen-xl mx-auto mt-6 ">
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Wanna login, please provide valid email and password.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-6">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label className="label">
                    <Link
                      to="/signup"
                      className="label-text-alt link link-hover">
                      Don,t have account? SignUp
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="LogIn"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

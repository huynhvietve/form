import logo from "../assets/LOGO.png";
import { useRef, useState } from "react";
const BasicForm = () => {
  const emailInputRef = useRef();
  const paswordInputRef = useRef();
  console.log(emailInputRef);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPasword = paswordInputRef.current.value;
    console.log(enteredEmail, enteredPasword);

    //  setIsLoading(true);
    //  let url;

    //   if (isLogin) {
    //     url =
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24';
    //   } else {
    //     fetch(
    //       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8KARKd1cjmqelMN77pAKkp-iNeAsc6rU",
    //       {
    //         method: "POST",
    //         body: JSON.stringify({
    //           email: enteredEmail,
    //           password: enteredPasword,
    //           returnSecureToken: true,
    //         }),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     ).then((res) => {
    //       if (res.ok) {
    //       } else {
    //         return res.json().then((data) => {
    //           //show an error modal
    //           console.log(data);
    //         });
    //       }
    //     });
    //   }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <img src={logo} alt="logo" className="logo"></img>
        </div>
        <h1>ĐĂNG NHẬP</h1>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">Tài Khoản</label>
            <input type="text" id="name" ref={emailInputRef} />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="password">Mật Khẩu</label>
          <input
            style={{ marginLeft: "34px" }}
            type="password"
            id="password"
            ref={paswordInputRef}
          />
        </div>
        <div className="form-actions">
          <button type="button">ĐĂNG NHẬP</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;

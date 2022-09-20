import React from "react";
import {Formik} from 'formik';
import Swal from "sweetalert2";
const Plugin = () => {
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    resetForm();
    const response = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
    })
    
    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Logedin'
      })
    }else if((response.status === 401)){
      Swal.fire({
        icon : 'success',
        title : 'Login Failed'
      })
    }else{
      console.log('unknown error ocuured');
    }

    // data to store in database
  }

  return (
    <>
    {/* Section: Design Block */}
    <section className="text-center text-lg-start">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
        }}
      />
      {/* Jumbotron */}
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)"
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Newsletter</h2>
                <Formik initialValues={{email:'', password :''}} onSubmit={loginSubmit} >
      {({values, handleSubmit,handleChange}) => (

                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                                      </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example33"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>
                  {/* Register buttons */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github" />
                    </button>
                  </div>
                </form>

                )}
        </Formik>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              className="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </section>
    {/* Section: Design Block */}
  </>
  
  );
};
export default Plugin;

import React, { useState, useEffect, useRef, useId } from 'react';
import Eye from '../public/Eye.svg';
import EyeOff from '../public/EyeOff.svg';
import Image from 'next/image';
import uniqid from 'uniqid';

const Sidebar = ({ users, setUsers }) => {
  const [showPassword, setShowPassword] = useState<Boolean>(true);
  const [userRole, setUserRole] = React.useState<Boolean>(true);
  const [adminRole, setAdminRole] = React.useState<Boolean>(false);

  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newUser = [...users];
    newUser.push({
      fname,
      lname,
      company,
      email,
      password,
      role: adminRole ? 'Admin' : 'User',
      id: uniqid(),
    });
    setUsers(newUser);
    formRef?.current?.reset();
  };
  return (
    <>
      <div className="flex flex-grow-0 flex-col items-start max-w-lg h-full bg-white p-10 gap-10 border-r-[1px] border-[#E2E8F0]">
        <h1 className="font-bold text-[#0F172A] text-sm leading-6 w-[142px] h-6">Add Customer</h1>
        <div className="flex flex-col items-start p-0 gap-6 w-[432px] h-[560px]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            autoComplete="on"
            className="flex-none order-1 items-stretch flex-grow-0 bg-white"
          >
            {/***************** First Name & Last Name **********************/}
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="flex flex-col gap-4 ">
                  <label
                    htmlFor="fname"
                    className="text-xs leading-6 text-[#475569] font-medium w-[83px] h-6"
                  >
                    First name
                  </label>
                  <div className="inputContainer w-[204px] flex flex-col gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      name="fname"
                      id="fname"
                      className="inputStyle peer"
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                    <caption className="invisible peer-invalid:visible text-red-400 font-light text-xs">
                      Required
                    </caption>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="lname"
                    className="text-xs leading-6 text-[#475569] font-medium w-[83px] h-6 "
                  >
                    Last name
                  </label>
                  <div className="inputContainer w-[204px]  flex flex-col gap-2">
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="inputStyle peer"
                      required
                      onChange={(e) => setLname(e.target.value)}
                    />
                    <caption className="invisible peer-invalid:visible text-red-400 font-light text-xs">
                      Required
                    </caption>
                  </div>
                </div>
              </div>

              {/*************** Company *****************/}
              <div className="flex flex-col group">
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="company"
                    className="text-xs pt-2 leading-6 text-[#475569] font-medium"
                  >
                    Company
                  </label>
                  <div className="inputContainer w-full flex flex-col gap-2">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="inputStyle w-full peer"
                      required
                      onChange={(e) => setCompany(e.target.value)}
                    />
                    <caption className="invisible peer-invalid:visible text-red-400 font-light text-xs">
                      Required
                    </caption>
                  </div>
                </div>
              </div>

              {/*************** Status *****************/}
              <div className="flex flex-col group pt-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="last-name"
                    className="text-xs leading-6 text-[#475569] font-medium"
                  >
                    Status
                  </label>

                  <div className="inputContainer cursor-pointer w-full bg-[#F1F5F9] flex items-center p-1 gap-1 ">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setUserRole(true);
                        setAdminRole(false);
                      }}
                      className={`w-[210px] ${
                        userRole && 'bg-white'
                      } p-1 rounded-md transition duration-300 ease-linear`}
                    >
                      User
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setAdminRole(true);
                        setUserRole(false);
                      }}
                      className={`${
                        adminRole && 'bg-white'
                      } w-[210px] p-1 rounded-md transition duration-300 ease-linear`}
                    >
                      Administrator
                    </button>
                  </div>
                </div>
              </div>

              {/*************** Email *****************/}
              <div className=" flex flex-col group">
                <div className="flex flex-col gap-4">
                  <label htmlFor="email" className="text-xs leading-6 text-[#475569] font-medium">
                    Email
                  </label>
                  <div className="inputContainer w-full flex flex-col gap-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="inputStyle w-full peer"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <caption className="invisible peer-invalid:visible text-red-400 font-light text-xs">
                      Invalid email
                    </caption>
                  </div>
                </div>
              </div>

              {/********** Password ************/}

              <div className=" flex flex-col">
                <div className="flex flex-col gap-4 pt-2">
                  <label
                    htmlFor="password"
                    className="text-xs leading-6 text-[#475569] font-medium"
                  >
                    Password
                  </label>
                  <div className="w-full inputContainer flex items-start justify-center gap-2 relative flex-col">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="w-[372px] inputStyle peer"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      minLength="8"
                    />
                    <caption className="invisible peer-invalid:visible text-red-400 font-light text-xs">
                      8+ characters
                    </caption>
                    <div className="absolute inset-y-0 right-0 items-center pr-2 -translate-y-1">
                      {showPassword ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setShowPassword(!true);
                          }}
                        >
                          <Image alt="" src={Eye} />
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setShowPassword(!false);
                          }}
                        >
                          <Image alt="" src={EyeOff} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className=" bg-white text-right pt-2">
                <button
                  type="submit"
                  className="h-10 inline-flex justify-center py-2 px-4 border w-full border-transparent shadow-sm text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/80"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

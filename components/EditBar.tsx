import React, { useState, useContext, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditBar = ({ setEditMode, currentId }) => {
  const router = useRouter();

  const inputRef = useRef<null | HTMLInputElement>(null);
  const formRef = useRef<null | HTMLFormElement>(null);
  const [userRole, setUserRole] = React.useState<Boolean>(true);
  const [adminRole, setAdminRole] = React.useState<Boolean>(false);

  const [selectedUser, setSelectedUser] = useState({
    id: '',
    fname: '',
    lname: '',
    email: '',
    company: '',
    role: '',
    password: '',
  });

  const currentUserId = currentId;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    let userId = currentUserId;
    //let selectedUser = users.find((user) => user.id === parseInt(userId));
    //setSelectedUser(selectedUser);
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (userKey: string, newValue: string) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
    return <div className="flex">Invalid Employee ID</div>;
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //editUser(selectedUser);
    formRef?.current?.reset();
    setEditMode(false);
  };

  return (
    <>
      <div className="flex flex-grow-0 flex-col items-start max-w-lg h-full bg-white p-10 gap-10 border-r-[1px] border-[#E2E8F0]">
        <h1 className="font-bold text-[#0F172A] text-sm leading-6 w-[142px] h-6">Add Customer</h1>
        <div className="flex flex-col items-start p-0 gap-6 w-[432px] h-[560px]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="flex-none order-1 items-stretch flex-grow-0 bg-white"
          >
            {/***************** First Name & Last Name **********************/}
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="flex flex-col gap-3 ">
                  <label
                    htmlFor="fname"
                    className="text-xs leading-6 text-[#475569] font-medium w-[83px] h-6"
                  >
                    First name
                  </label>
                  <div className="inputContainer w-[204px]">
                    <input
                      ref={inputRef}
                      type="text"
                      className="myInput"
                      required
                      value={selectedUser.fname}
                      onChange={(e) => handleOnChange('fname', e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="last-name"
                    className="text-xs leading-6 text-[#475569] font-medium w-[83px] h-6 "
                  >
                    Last name
                  </label>
                  <div className="inputContainer w-[204px]">
                    <input
                      type="text"
                      className="myInput"
                      required
                      value={selectedUser.lname}
                      onChange={(e) => handleOnChange('lname', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/*************** Company *****************/}
              <div className="flex flex-col group">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="last-name"
                    className="text-xs leading-6 text-[#475569] font-medium"
                  >
                    Company
                  </label>
                  <div className="inputContainer w-full">
                    <input
                      type="text"
                      className="myInput w-full"
                      required
                      value={selectedUser.company}
                      onChange={(e) => handleOnChange('company', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/*************** Status *****************/}
              <div className="flex flex-col group">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="last-name"
                    className="text-xs leading-6 text-[#475569] font-medium"
                  >
                    Status
                  </label>

                  <div className="inputContainer cursor-pointer w-full bg-[#F1F5F9] flex items-center p-1 gap-1">
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
                <div className="flex flex-col gap-3 ">
                  <label
                    htmlFor="email-address"
                    className="text-xs leading-6 text-[#475569] font-medium"
                  >
                    Email
                  </label>
                  <div className="inputContainer w-full">
                    <input
                      type="text"
                      autoComplete="email"
                      className="myInput w-full"
                      required
                      value={selectedUser.email}
                      onChange={(e) => handleOnChange('email', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className=" bg-white text-right">
                <button
                  type="submit"
                  className="h-10 inline-flex justify-center py-2 px-4 border w-full border-transparent shadow-sm text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/80"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBar;
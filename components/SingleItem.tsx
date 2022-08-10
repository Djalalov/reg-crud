import React, { useContext } from 'react';
import Image from 'next/image';
import Edit from '../public/Edit.svg';
import Trash from '../public/Trash.svg';

const SingleItem = ({
  fname,
  lname,
  company,
  email,
  role,
  setEditMode,
  currentId,
  users,
  setUsers,
}) => {
  const handleDelete = (e) => {
    e.preventDefault();
    let newUsers = [...users];
    newUsers = newUsers.filter((user) => user.id !== currentId);
    setUsers(newUsers);
  };

  const handleEdit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <th scope="row" className="font-medium whitespace-nowrap text-[#0F172A] py-2">
        <div className="flex gap-3">
          <svg
            width="25"
            height="25"
            data-jdenticon-value={fname}
            className="text-white bg-primary/70 rounded-md"
          >
            Fallback text
          </svg>
          {fname} {lname}
        </div>
      </th>
      <td className="text-[#0F172A]">{company}</td>
      <td className="text-[#0F172A]">{email}</td>
      <td className="text-[#0F172A]">
        {role === 'Admin' ? (
          <div className="w-12 h-6  bg-primary rounded"></div>
        ) : (
          <div className="w-12 h-6  bg-[#E2E8F0] rounded"></div>
        )}
      </td>
      <td>
        <div className="flex gap-4 w-16 items-center justify-center">
          <Image
            alt=""
            src={Edit}
            className="cursor-pointer"
            onClick={() => {
              setEditMode(true);
            }}
          />

          <Image alt="" src={Trash} onClick={handleDelete} className="cursor-pointer" />
        </div>
      </td>
    </>
  );
};

export default SingleItem;

import React, { useState, useEffect, useRef, useId } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';
import EditBar from '../../components/EditBar';
import SingleItem from '../../components/SingleItem';
import uniqid from 'uniqid';
import data from '../../data.json';

const Home: NextPage = () => {
  const [editMode, setEditMode] = useState<Boolean>(false);
  const [users, setUsers] = useState(data);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="h-[100vh] w-[100vw] flex flex-wrap flex-row items-start p-0 relative bg-indigo-600">
        {/* Side panel */}
        {editMode ? (
          <EditBar
            setEditMode={setEditMode}
            users={users}
            setUsers={setUsers}
            className="transition duration-300 ease-in-out"
          />
        ) : (
          <Sidebar
            users={users}
            setUsers={setUsers}
            className="transition duration-300 ease-in-out"
          />
        )}

        {/* Content */}
        <div className="flex-1 w-full h-full bg-white p-10 gap-10">
          <h1 className="font-bold text-[#0F172A] w-[109px] leading-6 text-xl">Customers</h1>
          <div className="flex flex-col items-center p-0 overflow-y-auto relative w-full ">
            <table className="table-auto w-full text-sm text-left text-gray-500 p-0 mt-10">
              <thead className="text-base text-gray-900">
                <tr>
                  <th scope="col" className="text-[#94A3B8] pb-2">
                    Name
                  </th>
                  <th scope="col" className="text-[#94A3B8] pb-2 ">
                    Company
                  </th>
                  <th scope="col" className="text-[#94A3B8] pb-2 ">
                    Email
                  </th>
                  <th scope="col" className="text-[#94A3B8] pb-2">
                    Admin
                  </th>
                  <th scope="col" className="text-[#94A3B8] pb-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="overscroll-auto overflow-y-auto w-full h-96 ">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-[#94A3B8]/10">
                    <SingleItem
                      fname={user.fname}
                      lname={user.lname}
                      company={user.company}
                      email={user.email}
                      role={user.role}
                      setEditMode={setEditMode}
                      currentId={user.id}
                      users={users}
                      setUsers={setUsers}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect, useRef, useId } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';
import EditBar from '../../components/EditBar';
import SingleItem from '../../components/SingleItem';
import users from '../../users.json';

const Home: NextPage = () => {
  const [editMode, setEditMode] = useState<Boolean>(false);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="h-[100vh] w-[100vw] flex flex-row items-start p-0 relative bg-indigo-600">
        {/* Side panel */}
        {editMode ? <EditBar setEditMode={setEditMode} /> : <Sidebar />}

        {/* Content */}
        <div className="flex-1 w-full h-full bg-white p-10 gap-10">
          <h1 className="font-bold text-[#0F172A] w-[109px] leading-6 text-sm">Customers</h1>
          <div className="flex flex-col items-start p-0 gap-6">
            <table className="w-full text-sm text-left text-gray-500 p-0 mt-10">
              <thead className="text-xs text-gray-900">
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
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <SingleItem
                      fname={user.fname}
                      lname={user.lname}
                      company={user.company}
                      email={user.email}
                      role={user.role}
                      id={user.id}
                      setEditMode={setEditMode}
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

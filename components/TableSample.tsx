import React from 'react';

const TableSample = () => {
  return (
    <div>
      <main>
        <div className="py-12">
          <div className="max-w-full mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg py-4 px-4">
              <form className="mb-4 border-2">
                <div className="address border-2 border-red-200">
                  <div className="item mb-2 md:flex md:flex-wrap md:justify-between">
                    <div className="container w-full px-4 sm:px-8">
                      <div className="flex flex-col border">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
                            <div className="table-wrp block max-h-96">
                              <table className="w-full">
                                <thead className="bg-white border-b sticky top-0">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                      Select
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                      Company
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                      Address
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className=" h-96 overflow-y-auto">
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="1" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      BATHURST{' '}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="2" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      BATHURST
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="3" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      MUDGEE
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="4" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      ORANGE
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="5" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      TAREN POINT
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="1" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      BATHURST{' '}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="2" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      BATHURST
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="3" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      MUDGEE
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="4" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      ORANGE
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="5" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 px-6 py-4 whitespace-nowrap">
                                      TAREN POINT
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="1" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900  px-6 py-4 whitespace-nowrap">
                                      BATHURST{' '}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="2" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900  px-6 py-4 whitespace-nowrap">
                                      BATHURST
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="3" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900  px-6 py-4 whitespace-nowrap">
                                      MUDGEE
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="4" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900 after:px-6 py-4 whitespace-nowrap">
                                      ORANGE
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      <input type="checkbox" name="address" value="5" />
                                    </td>
                                    <td className="text-sm font-extrabold text-gray-900  px-6 py-4 whitespace-nowrap">
                                      TAREN POINT
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      Address Here Address Here Address Here Address Here Address
                                      Here Address Here{' '}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TableSample;

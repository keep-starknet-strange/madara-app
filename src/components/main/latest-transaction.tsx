import { tableData } from '@/static';
import { shortenAddress } from '@/utils';
import Link from 'next/link';
import React from 'react'
function LatestTransaction() {
    const renderTableRows = () => {
        return tableData.map((row, index) => (
          <tr
            key={index}
            className={`transition duration-300 ease-in-out ${
              index % 2 === 0 ? "bg-[#111]" : "bg-[#151515]"
            }`}
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#9CA3AF]">
              {row.block}
            </td>
            <td className="text-sm text-[#9CA3AF] font-light px-6 py-4 whitespace-nowrap">
              {shortenAddress(row.hash)}
            </td>
            <td className="text-sm text-[#9CA3AF] font-light px-6 py-4 whitespace-nowrap">
              {row.status}
            </td>
            <td className="text-sm text-[#9CA3AF] font-light px-6 py-4 whitespace-nowrap">
              {row.age}
            </td>
          </tr>
        ));
      };
      return (
        <>
            <div className="flex flex-col mt-8">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center my-4">
                    <p className="font-normal">Latest Transactions</p>
                    <p className="text-[#E62600] font-normal"><Link href={'/transactions'}>View all transactions &#8594;</Link></p>
                  </div>
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-[#151515] border-b border-[#151515]">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4 text-left"
                          >
                            Block
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4 text-left"
                          >
                            Hash
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4 text-left"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white px-6 py-4 text-left"
                          >
                            Age
                          </th>
                        </tr>
                      </thead>
                      <tbody>{renderTableRows()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </>
        )
}

export default LatestTransaction
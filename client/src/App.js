import React from "react";
import './App.css';
import fakeData from "./admin-data.json";
import { useTable } from "react-table";

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => [
  {
    Header: "Patient ID",
    accessor: "patientId",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Sex",
    accessor: "sex",
  },
  {
    Header: "Zip Code",
    accessor: "zipCode",
  },
  {
    Header: "Patient BMI",
    accessor: "bmi",
  },
  {
    Header: "Patient Weight",
    accessor: "weight",
  },
  {
    Header: "Exam Image",
    accessor: "image",
  },
  {
    Header: "Exam ID",
    accessor: "examId",
  },
  {
    Header: "ICU Admittance",
    accessor: "icuAdmit",
  },
  {
    Header: "# of ICU Admits",
    accessor: "icuNum",
  },
  {
    Header: "Mortality",
    accessor: "mortality",
  },
  {
    Header: "",
    accessor: "update",
  },
  {
    Header: "",
    accessor: "delete",
  },
  ],
  []
  );

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ columns, data });

  return (
    <div className="App">
      <table {...getTableProps()}>
        <thead className="App-header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th>
                   {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
          </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) =>{
            prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
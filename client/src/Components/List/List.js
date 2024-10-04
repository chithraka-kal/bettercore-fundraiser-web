import React from "react";

export default function h() {
  return (
    <div className="list_outer">
      <h1>Donation List</h1>
      <table className="tableouter">
        <thead>
          <tr>
            <th>Avetat</th>
            <th>Gmail</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="abc"></div>
            </td>
            <td>
              <div className="gmail">Dilshansanjeewa@gmail.com</div>
            </td>
            <td>
              <div className="amount">20$</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="abc"></div>
            </td>
            <td>
              <div className="gmail">AjithMuthukumarana@gmail.com</div>
            </td>
            <td>
              <div className="amount">80$</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="abc"></div>
            </td>
            <td>
              <div className="gmail">AbcKannagara@gmail.com</div>
            </td>
            <td>
              <div className="amount">120$</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

export default function h() {
  return (
    <div className="list_outer">
      <h1>Top Donation List</h1>
      <table className="tableouter">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Gmail</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="Tbody">
          <tr>
            <td>
              <div className="abc"></div>
            </td>
            <td>
              <div className="gmail">Dilshansanjeewa@gmail.com</div>
            </td>
            <td>
              <div className="amountA">274$</div>
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
              <div className="amountA">23$</div>
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
              <div className="amountA">150$</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';

export const Depart = () => (
  <div>
    Departing Airport:<select name="depart">
      <option value="">---</option>
      <option value="KIWA">KIWA (AZ-Gateway)</option>
    </select>
    <h2>Airport of Departure data</h2>
    <table>
      <tbody>
        <tr>
          <th>Elevation: </th>
          <td>
            <input name="elevationDepart" />
          </td>
        </tr>
        <tr>
          <th>Headwind: </th>
          <td>
            <input name="headwindDepart" />
          </td>
        </tr>
        <tr>
          <th>Takeoff: </th>
          <td>
            <input name="takeoffDepart" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Depart;
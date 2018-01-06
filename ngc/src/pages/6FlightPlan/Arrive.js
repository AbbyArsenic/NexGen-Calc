import React from 'react';

export const Arrive = () => (
  <div>
    Departing Airport:<select name="arrive">
      <option value="">---</option>
      <option value="KIWA">KIWA (AZ-Gateway)</option>
    </select>
    <h2>Airport of Arrival data</h2>
    <table>
      <tbody>
        <tr>
          <th>Elevation: </th>
          <td>
            <input name="elevationArrive" />
          </td>
        </tr>
        <tr>
          <th>Headwind: </th>
          <td>
            <input name="headwindArrive" />
          </td>
        </tr>
        <tr>
          <th>Takeoff: </th>
          <td>
            <input name="takeoffArrive" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Arrive;
const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      {sat.map((id, data) => {
        return (
          <tbody>
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>conditional</td>
            </tr>
          </tbody>
        )
      }
      )};
    </table>
  );
};

export default Table;
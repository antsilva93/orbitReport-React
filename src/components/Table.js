import "./styling.css";

const Table = ({ sat }) => {

  const isOperational = (props) => {
    if (props === true) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }

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
      <tbody>{
        sat.map((data, id) => {
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{isOperational(data.operational)}</td>
            </tr>
          )
        }
        )}
      </tbody>
    </table>
  );
};

export default Table;
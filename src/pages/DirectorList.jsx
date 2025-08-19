import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
  const { directors } = useOutletContext();
  return (
    <ul>
      <li>
        <Link to="new">Add New Director</Link>
      </li>
      {directors.map((d) => (
        <li key={d.id}>
          <Link to={d.id}>{d.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DirectorList;

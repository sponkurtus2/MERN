import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [profesores, setProfesores] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((profesores) => setProfesores(profesores.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {profesores.map((profesor) => {
            return (
              <tr>
                <td>{profesor.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

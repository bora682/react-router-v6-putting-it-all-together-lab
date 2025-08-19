import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function DirectorForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const { addDirector } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newId = addDirector(name.trim(), bio.trim());
    navigate(`/directors/${newId}`);
  };

  return (
    <div>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  );
}

export default DirectorForm;

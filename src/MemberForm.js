import React, { useState } from "react";

const MemberForm = ({ onMemberAdd }) => {
  const [newMember, setNewMember] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onMemberAdd({
      id: new Date().getTime(),
      name: newMember
    });
    setNewMember("");
  };

  const handleChange = (event) => {
    setNewMember(event.currentTarget.value);
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <input
          className="form-control"
          value={newMember}
          type="text"
          placeholder="Jean"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success ml-3">
          Confirmer
        </button>
      </div>
    </form>
  );
};

export { MemberForm };

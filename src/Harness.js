import "./styles.css";
import React, { useState } from "react";
import { Member } from "./Member";
import { MemberForm } from "./MemberForm";
import { RandomMember } from "./RandomMember";

const Harness = () => {
  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    const membersCpy = [...members];
    membersCpy.push(member);
    setMembers(membersCpy);
  };

  const deleteMember = (id) => {
    const membersCpy = [...members];

    membersCpy.splice(
      membersCpy.findIndex((member) => member.id === id),
      1
    );
    setMembers(membersCpy);
  };

  const title = "Liste de la sellette";
  const subtitle = "Ajout d'un membre";

  return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <div className="container-fluid">
            <span className="navbar-brand text-white font-weight-bold mb-0 h1">La Sellette</span>
          </div>
        </nav>
        <div className="container-fluid p-3 pt-5">
          <div className="row">
            <div className="col-md-6">
              <h1>{title}</h1>

              { members.length === 0 ? <div className="alert alert-warning">La liste des vide.</div> : "" }
              <ul className="list-group">
                {members.map((member) => (
                  <Member key={member.id} member={member} onDelete={deleteMember} />
                ))}
              </ul>
            </div>

            <div className="col-md-6">
              <h2>{subtitle}</h2>

              <MemberForm onMemberAdd={addMember} />

              <RandomMember members={members} />
            </div>
          </div>
        </div>
      </div>
  );
};

export { Harness };

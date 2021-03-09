const Member = ({ member, onDelete }) => {
  return (
    <li className="list-group-item">
      {member.name}
      <button
        type="button"
        className="btn btn-danger float-right"
        onClick={() => onDelete(member.id)}
      >
        X
      </button>
    </li>
  );
};

export { Member };

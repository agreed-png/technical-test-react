function ListGroup(props: any) {
  return (
    <div className="person">
      <h1>List</h1>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <p>AgeMonth: {props.user.ageMonth}</p>
      <p>AgeYear: {props.user.ageYear}</p>
      <p>Student: {props.user.student}</p>
      <p>School: {props.user.school}</p>
    </div>
  );
}

export default ListGroup;

const TodoItem = (props) => {
  return (
    <tr>
      <th scope="row">
        <input className="form-check-input" type="checkbox" value="" />
      </th>
      <td>Buy some groceries before 12</td>
      <td>High</td>
      <td>2022/10/13</td>
      <td>
        <div>
          <button type="button" className="btn btn-warning btn-sm m-1">
            Edit
          </button>
          <button type="button" className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TodoItem;

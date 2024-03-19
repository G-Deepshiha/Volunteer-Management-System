import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

const Admin = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [area, setArea] = useState('');
  const [schedule, setSchedule] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then(res => { setPost(res.data) })
      .catch(err => { console.log(err) })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/students`, {
      "id": id, "name": name, "age": age, "area": area,"schedule":schedule
    })
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/students/${id}`)
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
  }

  const [popup, setPopup] = useState(false);
  const [id1, setId1] = useState(0);
  const [name1, setName1] = useState('');
  const [age1, setAge1] = useState('');
  const [area1, setArea1] = useState('');
  const [schedule1, setSchedule1] = useState('');

  const openPopup = (datas) => {
    setPopup(true);
    setId1(datas.id);
    setName1(datas.name);
    setAge1(datas.age);
    setArea1(datas.area);
    setSchedule1(datas.schedule);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/students/${id1}`, { "id": id1, "name": name1, "age": age1, "area": area1,"schedule":schedule1 })
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
  }

  return (
    <div className="container">
      <h2>Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <br></br>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br></br>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <br></br>
        <label>Area of Interest:</label>
        <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
        <br></br>
        <label>Work Schedule:</label>
        <input type="text" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        <br></br>
        <button type='submit'>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>AREA OF INTEREST</th>
            <th>WORK SCHEDULE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {post.map(x => {
            return (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.age}</td>
                <td>{x.area}</td>
                <td>{x.schedule}</td>
                <td>
                  <button onClick={() => openPopup(x)}>Update</button>
                  <button onClick={() => handleDelete(x.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {popup &&
        <div className="popup">
          <form onSubmit={handleUpdate}>
            <button onClick={() => setPopup(false)}>X</button>
            <label>ID:</label>
            <input type="number" value={id1} onChange={(e) => setId1(e.target.value)} />
            <br></br>
            <label>Name:</label>
            <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} />
            <br></br>
            <label>Age:</label>
            <input type="number" value={age1} onChange={(e) => setAge1(e.target.value)} />
            <br></br>
            <label>Area of Interest:</label>
            <input type="text" value={area1} onChange={(e) => setArea1(e.target.value)} />
            <br></br>
            <label>Work Schedule:</label>
            <input type="text" value={schedule1} onChange={(e) => setSchedule1(e.target.value)} />
            <br></br>
            <button type='submit'>Submit</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Admin;
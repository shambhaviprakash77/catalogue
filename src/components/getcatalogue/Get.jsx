import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const Get = () => {

  const [cataloguerrs, setcataloguerrs] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setcataloguerrs(response.data);
    }

    fetchData();

  }, [])

  const deletecatalogue = async (catalogueId) => {
    await axios.delete(`http://localhost:8000/api/delete/${catalogueId}`)
      .then((response) => {
        setcataloguerrs((prevcatalogue) => prevcatalogue.filter((catalogue) => catalogue._id !== catalogueId))
        toast.success(response.data.msg, { position: 'top-right' })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="container catalogueTable">
      <Link to={"/create"} className="btn btn-primary addButton">Add Catalogue</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Catalogue Name</th>
            <th>Author name</th>
            <th>Publisher</th>
            <th>number_of_copies</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {
            cataloguerrs.map((catalogue, index) => {
              return (
                <tr key={catalogue._id}>
                  <td>{index + 1}</td>
                  <td>{catalogue.name}</td>
                  <td>{catalogue.author}</td>
                  <td>{catalogue.publisher}</td>
                  <td>{catalogue.number_of_copies}</td>
                  <td>{catalogue.price}</td>
                  <td className="actionButtons">
                    <button onClick={() => deletecatalogue(catalogue._id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                    <Link to={`/edit/` + catalogue._id} className="btn btn-warning ms-2"><i className="fa-solid fa-pen-to-square"></i></Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Get;

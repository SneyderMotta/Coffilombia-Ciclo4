import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudTable() {
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("/api/cruds");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);

	return (
		<div className="container">
			<div>
				<h2>
					tabla de pots
					<p>
						<Link to="/cruds/new" className="btn btn-primary float-right">
							Crear pots
						</Link>
					</p>
				</h2>
				<hr />
			</div>
		
                        <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr>
						<th>nombre</th>
						<th>Telefono</th>
						<th>Email</th>
						<th>Direccion</th>
						<th>Ver</th>
						<th>Editar</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>
					{cruds &&
						cruds.map((crud) => {
							return (
								<tr key={crud._id}>
									<td>
										<Link to={`/cruds/${crud._id}`} className="link-line">
											{crud.companyName}
										</Link>
									</td>
									<td>{crud.phone}</td>
									<td>{crud.email}</td>
									<td>{crud.location}</td>
									<td>
										<Link to={`/cruds/${crud._id}`} className="btn btn-warning">
											Ver
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/edit`}
											className="btn btn-success"
										>
											Editar
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/delete`}
											className="btn btn-danger"
										>
											Borrar
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
	);
}

export default CrudTable;

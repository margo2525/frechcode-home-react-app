import React, { useEffect, useState } from 'react';
import getUsers from '../../api';


function UsersLoader() {
	const [users, setUsers] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [results, setResults] = useState(5);
 
	const loadUsers = () => {
	  setIsFetching(true);
	  // getUsers({ page: currentPage, results: 5 })
	  fetch(
		 `https://randomuser.me/api?page=${currentPage}&results=${results}&seed=pe2022`
	  )
		 .then(response => response.json())
		 .then(data => setUsers(data.results))
		 .catch(e => setError(e))
		 .finally(() => setIsFetching(false));
	};
 
	useEffect(() => {
	  loadUsers();
	}, [currentPage, results]);
 
	const prevPage = () => {
	  if (currentPage > 1) {
		 setCurrentPage(currentPage => currentPage - 1);
	  }
	};
 
	const nextPage = () => {
	  setCurrentPage(currentPage => currentPage + 1);
	  // setValue(10)
	  // setValue(function (value) {
	  //   return value + 1;
	  // });
	  // setValue(value=>value + 1);
	};
 
	return (
	  <>
		 {error && <div>!!!ERROR!!! {JSON.stringify(error)}</div>}
		 {isFetching && <div>Loading. Please waite...</div>}
		 {!error && !isFetching && (
			<>
			  <button onClick={prevPage}>{'<'}</button>
			  <button onClick={nextPage}>{'>'}</button>
			  <ul>
				 {users.map(u => (
					<li key={u.login.uuid}>{JSON.stringify(u)}</li>
				 ))}
			  </ul>
			</>
		 )}
	  </>
	);
 }
export default UsersLoader;
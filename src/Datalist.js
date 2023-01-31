// import React, { useState, useEffect } from "react";
// import BootstrapTable from 'react-bootstrap-table-next';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
// import paginationFactory, { PaginationListStandalone } from "react-bootstrap-table2-paginator";
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
// import filterFactory,{textFilter} from "react-bootstrap-table2-filter";
// import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
// function Datalist() {


//     const [userList, setUserList] = useState([]);
//     const columns = [
//         { dataField: 'id', text: 'ID' },
//         { dataField: 'name', text: 'Name', sort: true, filter:textFilter() },
//         { dataField: 'username', text: 'Username', sort: true },
//         { dataField: 'email', text: 'Email', sort: true },
//     ]

//     const pagination = paginationFactory({
//         page: 1,
//         sizePerPage: 5,
//         lastPageText: '>>',
//         firstPageText: '<<',
//         nextPageText: '>',
//         prePageText: '<',
//         showTotal: true,
//         alwaysShowAllBtns: true,
//         onPageChange: function (page, sizePerPage) {
//             console.log('page', page);
//             console.log('sizeperpage', sizePerPage);
//         },
//         onSizePerPageChange: function (page, sizePerPage) {
//             console.log('page', page);
//             console.log('sizeperpage', sizePerPage)
//         }





//     });




//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(result => setUserList(result))
//             .catch(error => console.log(error));

//     }, [])






//     return <div>


//         <BootstrapTable 
//         bootstrap4 
//         keyField='id' 
//         columns={columns} 
//         data={userList}
//         pagination = {pagination} 
//         filter={filterFactory()}
       
       
       
//         />







//         {/* <table>
//        <tr>
//        <th>ID</th>
//        <th>Name</th>
//        <th>Username</th>
//        <th>Email</th>       
//        </tr>
//        {
           
//            userList && userList.length> 0 ?
//            userList.map(usr =>
//                  <tr>
//                  <td>{usr.id}</td>
//                  <td>{usr.name}</td>
//                  <td>{usr.username}</td>
//                  <td>{usr.email}</td> 
                 
                 
//                  </tr>       
                        
//                         )
//            :'loading'
           
//        }
       
//        </table> */}
//     </div>
// }

// export default Datalist;



















import React, { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory,{textFilter} from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

function Datalist() {
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { dataField: 'id', text: 'ID', sort: true,order:'asc', },
    { dataField: 'firstName', text: 'Name', sort: true,  },
    { dataField: 'lastName', text: 'Username', sort: true },
    { dataField: 'email', text: 'Email', sort: true },
    
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizeperpage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizeperpage', sizePerPage);
    },
  });

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((result) => setUserList(result.users))
      .catch((error) => console.log(error));
  }, []);

  const filteredUsers = userList.filter((user) =>
  user.firstName.toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <div>
     
        <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      
        <input  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
<div className="card">
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={filteredUsers}
        pagination={pagination}
        filter={filterFactory()}
      />
      </div>
    </div>
  );
}

export default Datalist;

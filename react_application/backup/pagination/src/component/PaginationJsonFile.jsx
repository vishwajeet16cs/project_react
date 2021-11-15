import react, {useState} from "react";
import ReactPaginate from 'react-paginate'
import JsonData from "../MOCK_DATA.json";
function PaginationJsonFile(){
    const[users,setUsers]=useState(JsonData.slice(0,81));// slice the data 0-to-50 index
    const [pageNumber,setPageNumber]=useState(0);
  const usersPerPage=10;// defining number of user will be display in per page 
  const pagesVisited=pageNumber*usersPerPage;
  const displayUsers=users.slice(pagesVisited,pagesVisited+usersPerPage)//0->10,10->20,20->30
  //pageVisited, pageVisited+5
  // above logic will only show 10 user perPage
  let disp=displayUsers.map((user)=>{
    return (
        <div className="user">
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <h3>{user.email}</h3>
        </div>
    );
});
const pageCount=Math.ceil(users.length/usersPerPage);
//used to round up a number  1.4, Math.ceil() will round off it to 2.
//num of page count which will be shown  in the pgination part 
// using ceil function 
//like we have 51 usears we have 10 user per page then we will get flot value when 
//we devide the 51/10 so we are using 
const changePage=({selected})=>{
    setPageNumber(selected)
}
    
  return (
        <>
        <div className="App">
            {disp}{/* here we are calling disp
             which is defined above which contain user detail
             like firstname,lastname,email
             */}
             
             <ReactPaginate
             previousLabel={"previous"}
             nextLabel={"Next"}
             pageCount={pageCount} // will store the page cunt
             onPageChange= {changePage}
             containerClassName={"paginationBttns"}
             previousLinkClassName={"previousBttns"}
             nextClassName={"nextBttn"}
             disabledClassName={"paginationDisabled"}
             activeClassName={"paginationActive"}
            
             />
            
        </div>
        </>
    )
}
export default PaginationJsonFile;
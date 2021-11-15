import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate'
class FirstComponents extends React.Component{
    constructor(props){
        super(props)
        this.state={
                offset:0,
                tableData:[],
                orgtableData:[],
                perPage:10, // number of col-- number of slice you want to show
                currentPage:0
        }
        this.handlePageClick=this.handlePageClick.bind(this)
    }
    handlePageClick=(e)=>{
        const selectedPage=e.selected;
        const offset = selectedPage*this.state.perPage;
        this.setState({
            currentPage:selectedPage,
            offset:offset
        },()=>{
            this.loadMoreData()
        });
    };
    loadMoreData(){
        const data=this.state.orgtableData;
        const slice= data.slice(this.state.offset,this.state.offset+this.state.perPage)
        this.setState({
            pageCount:Math.ceil(data.length/this.state.perPage),
            tableData:slice
        })
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            var data=response.data;
            var slice=data.slice(this.state.offset,this.state.offset+ this.state.perPage )// we are slaice the data where to where we want to show the col of the table
                this.setState({
                    pageCount:Math.ceil(data.length/this.state.perPage),
                    orgtableDta:response.data,
                    tableData:slice
                })
        })
    }
     render(){
        return(<>
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <h6>{JSON.stringify(this.state.tableData)}</h6> */}
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tableData.map((ele)=>{
                                        return <tr>
                                            <td>{ele.id}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.email}</td>
                                            <td>{ele.body}</td>
                                        </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={this.state.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active "}
        />
        </>)
    }
}
export default FirstComponents;
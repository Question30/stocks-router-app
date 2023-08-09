import data from "../data/data";
import { Link } from "react-router-dom";

export default function Home() {

    console.log(data);

    const tableData = data.map((ele, index) => {
        return(
        <tr key={index}>
            <td><Link to={`/stocks/${ele.symbol}`}>{ele.name}</Link></td>
            <td>${ele.lastPrice}</td>

            {
                ele.change < 0 ? (<td><div className="text-danger">{ele.change}</div></td>) : (<td><div className="text-success">{ele.change}</div></td>)
            }
        </tr>
        )
    })

    return(
        <>
        <h1 className="mt-5 mb-5 text-white">Most Active Stocks</h1>
        <table className="table table-dark table-striped table-bordered border-white">
            <thead>
                <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Change</th>
                </tr>
            </thead>
            <tbody>
               {tableData}
            </tbody>

        </table>
        
        </>
    );
}
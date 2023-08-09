import data from '../data/data';
import {useParams} from "react-router-dom";


export default function Stocks() {

    const params = useParams();
    const { symbol } = params;

    return(
        <div>{ data.filter((sym) => sym.symbol === symbol)
            .map((ele) => {
                const { name, symbol, lastPrice, change, high, low, open} = ele;
                return(
                    <div className='container mt-5 border border-white text-white' key={symbol}>
                        <h1 className='my-3'> <span className='text-primary my-2'>Company: </span>{name}</h1>
                        <h2 className='my-3'><span className='text-secondary'>Symbol: </span>{symbol}</h2>
                        <h3 className='my-3'><span className='text-success'>Last Price:</span> ${lastPrice}</h3>

                        {
                            change < 0 ? ( <h4 className='my-3'><span className='text-danger'>Change: </span>{change}</h4>) : ( <h4 className='my-3'><span className='text-success'>Change: </span>{change}</h4>)
                        }
                        <h5 className='my-3'><span className='text-info'>High: </span>{high}</h5>
                        <h5 className='my-3'><span className='text-info'>Low: </span>{low}</h5>
                        <h5 className='my-3'><span className='text-info'>Open: </span>{open}</h5>
                    </div>
                )
            })}</div>
    )
}
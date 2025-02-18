import React from "react";
import data from './data.json';
import {format} from 'date-fns';
import './Orders.css'

const Orders = () => {

    const formatDate = (dateString) => {
       return format(dateString, "dd/MM/yyyy")
    }

    const formatCurrency = (amount, currency ) => {
        return new Intl.NumberFormat("de-DE", { style: "currency", currency: currency }).format(
            amount);
    }

    return(
            <div className="table-container">
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Order Type</th>
                        <th>Buy</th>
                        <th>Sell</th>
                        <th>Value Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((order) => (
                        <tr key={order.id} className="order-row">
                            <td>{order.attributes.reference}</td>
                            <td>{order.attributes["order-type"]}</td>
                            <td className="currency">{order.attributes["market-direction"] === "buy" ? `${formatCurrency((order.attributes["amount-cents"]/100), order.attributes["buy-currency"])}`: order.attributes["buy-currency"]}</td>
                            <td className="currency">{order.attributes["market-direction"] === "sell" ? `${formatCurrency((order.attributes["amount-cents"]/100), order.attributes["sell-currency"])}` : order.attributes["sell-currency"]}</td>
                            <td>{formatDate(order.attributes["value-date"])}</td>
                            <td>{order.attributes.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
    )
};
export default Orders
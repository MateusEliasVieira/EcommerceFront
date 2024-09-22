const Buy = (props) => {
    return(
        <div>
            <h3>Total R${props.total.toFixed(2)}</h3>
            <button className={"btn btn-success"} style={{fontSize:"30px",padding:"10px"}}>Realizar Pagamento</button>
        </div>
    )
}

export default Buy
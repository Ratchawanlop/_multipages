
import'./Variable.css'



function Variable({type, name, value, setValue}) {


    return(
        <div className="counter-container">
            <h1 className='counter-title'>{name || "Counter"}</h1>
            <button className='btn btn-danger' onClick={() => setValue(value - 1)}>-</button>
            <span className='counter-value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
            <button className='btn btn-success' onClick={() => setValue(value + 1)}>+</button>
        </div>
    )
}

export default Variable
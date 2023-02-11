
function Todolist({arr, fun}){
    return(
        <ul>
        {
          arr.map((x,i)=>(<li key={i}><i className="fa-solid fa-circle-xmark" onClick={()=>(fun(i))}></i>{x}</li>))
        }
      </ul>

    )
}

export default Todolist
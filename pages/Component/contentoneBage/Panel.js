export default function Panel(props,children){
    return(
        <div style={{borderRadius:"10px"}} className={"bg-white overflow-hidden "+props.className}>
            {
                props.header  && <h3 className="p-4 mb-0 fw-bold " style ={{ color:"rgba(3, 2, 41, 1) ",fontSize:"20px"}}>{props.header}</h3>
            }
            {
                props.children
            }
        </div>
    )
 }
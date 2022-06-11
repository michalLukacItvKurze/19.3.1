function DedinaElement(props){
 const styleD={fontSize:props.size, color:props.color}
 
 return(
   <p style={styleD}>{props.type}</p>
 )
}

export default DedinaElement;
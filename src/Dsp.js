let Dsp=(props)=>{
    return(<tr>
        <td>{props.data.name}</td>
        <td>{props.data.gen}</td>
        <td>{props.data.lang.toString()}</td>
    </tr>)
}
export default Dsp
import * as C from "./style"

const Stats = (props) => {
    const {title, data, color} = props;

    return (
        <C.Container color={color} width={data}>
            <h4>{title}</h4>   
            <p>{data < 100? `0${data}`: data}</p>
            <div>
                <span></span>
            </div>     
        </C.Container>
    );
}
 
export default Stats;
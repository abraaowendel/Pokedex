import * as C from "./style"

const Stats = (props) => {
    const {title, data} = props;

    return (
        <div>
            <p>{title}</p>   
            <p>{data}</p>     
        </div>
    );
}
 
export default Stats;
type PersonProps = {
    name:{
        first:string
        last:string
    }
}

export const person =(props:PersonProps) => {
    return 
    (
    <div>{props.name.first}{props.name.last}
    </div>
    )

}

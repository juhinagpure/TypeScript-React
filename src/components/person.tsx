import { PersonProps } from "./person.types"

export const Person =(props:PersonProps) => {
    return (
        <div>
            {props.name.first}{props.name.last} 
        </div>
    )
}
//objects
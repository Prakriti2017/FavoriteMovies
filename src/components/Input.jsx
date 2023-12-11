import './Input.css'

export default function Input({id, label, ...props}){
    return(
        <div className="form-inputs" key={label}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </div>
    )
}
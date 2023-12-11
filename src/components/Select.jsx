export default function Select({ id, label, options, ...props}){

    return(
        <div className="select-input">
            <label htmlFor={id}>{label}</label>
            <select {...props}>
                {
                    options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}
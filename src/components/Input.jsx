import "./Input.css";
export default function Input({ id, label, error, ...props }) {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input className="input-box" id={id} {...props} />
      </div>
      <div className="input-error">{error && <p>{error}</p>}</div>
    </>
  );
}

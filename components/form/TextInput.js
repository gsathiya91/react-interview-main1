export default function TextInput({ label, value, onChange, name, placeholder, error }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

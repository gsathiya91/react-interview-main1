export default function Textarea({ label, value, onChange, name, placeholder, error }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder}></textarea>
      {error && <span className="error">{error}</span>}
    </div>
  );
}

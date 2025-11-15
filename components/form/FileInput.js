export default function FileInput({ label, onChange, error }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="file" accept="image/*" onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

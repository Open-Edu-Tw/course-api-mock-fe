export default function Tag({ children }) {
  return (
    <div className="tag rounded-full border bg-neutral-50 w-max px-3 py-1">
      #{children}
    </div>
  );
}

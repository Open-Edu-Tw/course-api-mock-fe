export default function Tags({ children }) {
  return (
    <div className="flex flex-wrap justify-center max-w-xl gap-2 tags">
      {children}
    </div>
  );
}

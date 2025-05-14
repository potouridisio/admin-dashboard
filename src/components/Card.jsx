export default function Card(props) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_1px_3px_rgba(0,_0,_0,_0.1)]">
      <h2 className="text-xl font-semibold text-gray-900">{props.title}</h2>
      {props.description ? (
        <p className="mb-4 text-sm text-[#71717a]">{props.description}</p>
      ) : null}
      {props.children}
    </div>
  );
}

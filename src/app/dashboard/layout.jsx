export default function layout({ children, users, notifications, revenue }) {
  return (
    <>
      <div>{children}</div>
      <main className="flex gap-2">
        <div className=" flex-1">
          <div>{users}</div>
          <div>{notifications}</div>
        </div>
        <div className="flex-1">{revenue}</div>
      </main>
    </>
  );
}

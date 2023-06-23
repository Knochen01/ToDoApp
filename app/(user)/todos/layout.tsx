import ToDoList from "./todoList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <ToDoList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}

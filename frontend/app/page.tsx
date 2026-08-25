import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos } from "@/lib/todos";

// Halaman ini tidak boleh pakai 'use client' biar tetap jadi Server Component yaa!
export default async function HomePage() {
    // Mengambil data dengan penundaan waktu buatan (artificial delay)
    const todos = await getTodos();

    return (
        <main className="min-h-screen bg-gray-50 flex justify-center py-12 px-4">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-2xl h-fit">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Daftar Tugas (Todo List)
                    </h1>
                </div>

                {/* Memanggil komponen balok yang sudah dedek buat */}
                <TodoForm />
                <TodoList todos={todos} />
            </div>
        </main>
    );
}

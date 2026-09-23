import { getTodos } from "@/lib/todos";
import ApiTodoList from "./components/ApiTodoList";
import { TaskItem } from "@/types/api-todo"; // Pastikan path file tipe data Anda sudah benar

// 1. Fungsi adapter untuk mengubah tipe data Todo ke TaskItem agar TypeScript tidak error
function formatTodoToTask(raw: any): TaskItem {
    return {
        id: raw.id,
        title: raw.todo || raw.title || "", // Menyelaraskan nama properti teks tugas
        completed: raw.completed,
        userId: raw.userId || 0,
        source: "dummyjson-api", // Menyesuaikan dengan nilai literal tipe data TaskItem Anda
    };
}

// 4. Deklarasikan Server Component Asinkron
export default async function TodoPage() {
    // 2. Mengambil data asli berbentuk array dari file lib
    const rawTodos = await getTodos();

    // 3. Mengubah format array data agar sesuai dengan kriteria komponen ApiTodoList
    const initialTasks: TaskItem[] = (rawTodos || []).map(formatTodoToTask);

    return (
        <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
            <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
                    <header className="mb-6 border-b border-gray-100 pb-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-dark-70 text-center">
                            Daftar Tugas (Todo List)
                        </h1>
                    </header>

                    {/* Mengirim data initialTasks yang tipe datanya kini sudah cocok sempurna */}
                    <ApiTodoList initialTasks={initialTasks} />
                </div>
            </div>
        </main>
    );
}

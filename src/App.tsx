import { RamadhanTracker } from "./components/ramadhan-tracker"

function App() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 dark:text-emerald-200 mb-8">
          Ramadhan Tracker
        </h1>
        <RamadhanTracker />
      </div>
    </main>
  )
}

export default App

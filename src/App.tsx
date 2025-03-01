import { RamadhanTracker } from "./components/ramadhan-tracker"
import { LanguageSwitcher } from "./components/language-switcher"
import { useTranslation } from "react-i18next"
import "./i18n/i18n" // Import to initialize i18n

function App() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-200">
            {t('appTitle')}
          </h1>
          <LanguageSwitcher />
        </div>
        <RamadhanTracker />
      </div>
    </main>
  )
}

export default App

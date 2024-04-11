import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './app/providers/AuthProvider'
import { I18nProvider } from './app/providers/I18nProvider'
import Navigation from './app/navigation/Navigation'
import Toast from 'react-native-toast-message'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <AuthProvider>
          <Navigation />
          <Toast />
        </AuthProvider>
      </I18nProvider>
    </QueryClientProvider>
  )
}

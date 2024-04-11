import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from './app/providers/AuthProvider'
import { I18nProvider } from './app/providers/I18nProvider'
import Navigation from './app/navigation/Navigation'
import Toast from 'react-native-toast-message'
import { StatusBar } from 'expo-status-bar'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <AuthProvider>
          <SafeAreaProvider>
            <Navigation />
            <Toast />
            <StatusBar style="auto" />
          </SafeAreaProvider>
        </AuthProvider>
      </I18nProvider>
    </QueryClientProvider>
  )
}

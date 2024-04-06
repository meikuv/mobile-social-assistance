import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './app/providers/AuthProvider'
import Navigation from './app/navigation/Navigation'
import Toast from 'react-native-toast-message'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Navigation />
        <Toast />
      </AuthProvider>
    </QueryClientProvider>
  )
}

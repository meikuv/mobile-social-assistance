import { useContext } from 'react'
import { I18nContext } from '../providers/I18nProvider'

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

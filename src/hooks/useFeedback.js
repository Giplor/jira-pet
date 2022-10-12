import { useToast } from 'native-base'

export const useFeedback = () => {
  const toast = useToast()

  const showFeedback = (message) => {
    toast.show({
      description: message,
    })
  }
  return { showFeedback }
}

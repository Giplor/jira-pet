import { Box, Button, Text, VStack, FlatList } from 'native-base'
import { useState, memo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProjectUsers } from '../redux/selectors/selectors'
import { useValidation } from '../hooks/useValidation'
import DefaultInput from '../components/UIComponents/DefaultInput'
import { createNewTask } from '../redux/slices/tasksSlice'
import UserItem from '../components/UsersComponents/UserItem'
import { useNavigation } from '@react-navigation/native'
import { useFeedback } from '../hooks/useFeedback'

const UsersList = memo(({ setUser }) => {
  const users = useSelector(selectProjectUsers)

  const RenderUserItem = memo(({ user }) => {
    return (
      <UserItem
        size='sm'
        username={user.username}
        onPress={() => {
          setUser(user.username, user.id)
        }}
      />
    )
  })

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <RenderUserItem user={item} />}
      keyExtractor={(item) => item.id}
    />
  )
})

const CreateNewTaskScreen = () => {
  const dispatch = useDispatch()

  const [selectedUser, setSelectedUser] = useState({ username: '', id: '' })

  const title = useValidation()
  const description = useValidation()

  const navigation = useNavigation()

  const goToProjectInfo = useCallback(() => {
    navigation.navigate('Main', 'ProjectInfo')
  }, [])

  const loading = useSelector((state) => state.tasks.isLoading)

  const setUser = useCallback((username, id) => {
    setSelectedUser({ ...selectedUser, username, id })
  }, [])

  const { showFeedback } = useFeedback()

  const createTask = () => {
    dispatch(
      createNewTask({
        title: title.value,
        description: description.value,
        userId: selectedUser.id,
        errorCallback: showFeedback,
        successCallback: goToProjectInfo,
      })
    )
  }

  return (
    <Box width='100%' safeArea>
      <VStack justifyContent='space-between' space='5'>
        <DefaultInput
          value={title.value}
          setValue={(text) => title.onChange(text)}
          onBlur={title.onBlur}
          errorMessage={title.errorMessage}
          label='Title'
        />
        <DefaultInput
          value={description.value}
          setValue={(text) => description.onChange(text)}
          onBlur={description.onBlur}
          errorMessage={description.errorMessage}
          label='Description'
        />
        <Button
          onPress={createTask}
          isDisabled={!title.isValid || !description.isValid || !selectedUser.id}
          isLoading={loading}
        >
          Create task
        </Button>
      </VStack>
      <Text>Selected user:</Text>
      <UserItem username={selectedUser.username} />
      <UsersList setUser={setUser} />
    </Box>
  )
}

export default CreateNewTaskScreen

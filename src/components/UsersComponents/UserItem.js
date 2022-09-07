import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from './UserAvatar'

const UserItem = ({ users }) => {
  return (
    <View>
      <Text>{users.username}</Text>
      <UserAvatar avatar={users.avatar} />
    </View>
  )
}

export default UserItem

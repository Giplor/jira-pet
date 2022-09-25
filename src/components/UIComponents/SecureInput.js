import { FormControl, Input, WarningOutlineIcon, Pressable, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

const SecureInput = ({ value, setValue, onBlur, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl isInvalid={errorMessage}>
      <FormControl.Label>Password</FormControl.Label>
      <Input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChangeText={setValue}
        onBlur={onBlur}
        InputRightElement={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Icon
              as={
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                />
              }
              size={6}
              mr='2'
            />
          </Pressable>
        }
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

export default SecureInput

import { FormControl, Input, WarningOutlineIcon, Pressable, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

const FormInputPassword = ({ value, setValue }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <FormControl>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChangeText={setValue}
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
          Error
        </FormControl.ErrorMessage>
      </FormControl>
    </>
  )
}

export default FormInputPassword

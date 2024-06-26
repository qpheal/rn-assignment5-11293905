import { Text, View } from 'react-native'
import React, {useContext} from 'react'
import themeContext from '../theme/themeContext';

const Profile = () => {
  const theme = useContext(themeContext)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme.backgroundColor }}>
      <Text style={{ fontSize: 20, color: theme.color }}>Profile </Text>
   
    </View>
  );
};

export default Profile
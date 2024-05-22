import { Image, Text, TouchableOpacity, View } from 'react-native';
import icon from '../../assets/backIcon.png';



import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
  backButton: boolean, 
  title: string,
  subtitle?: string
}

export function Header( { backButton, subtitle, title }: Props ) {

  const { goBack } = useNavigation();


  return (
    <View style={styles.container}>

      {
        backButton &&
        <TouchableOpacity onPress={goBack}>
          <Image
            source={icon}
          />
        </TouchableOpacity>
      }
      
      
        <Text style={styles.title}>
            {title}
        </Text>
      
    </View>
  );
}
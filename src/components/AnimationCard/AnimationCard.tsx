import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import { useNavigation } from '@react-navigation/native';

interface Props {
  
  content: {
    id: string,
    title: string,
    subtitle: string,
    animation: any
  },

  animations: any
}

export function AnimationCard({ content, animations }: Props) {

    const { handleGoPageAnimation } = useContext(AnimationContext);
    const { navigate } = useNavigation()


  return (
    <TouchableOpacity style={styles.container} onPress={ () => {

      handleGoPageAnimation(content)
      navigate('AnimationPage')
      } }>
        <View style={styles.content}>
            { animations }
        </View>
    </TouchableOpacity>
  );
}
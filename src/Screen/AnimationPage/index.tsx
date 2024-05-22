import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";

export function AnimationPage(){

    const { animation } = useContext(AnimationContext);
    

    return(
        <View style={styles.container}> 
            <Header
                backButton
                title={animation.title}
            />

            <View style={styles.content}>

                <Text style={styles.subtitle}>{animation.subtitle}</Text>

                <View style={styles.card}>

                    <View style={styles.animation}>
                        {animation.animation}
                    </View>
                   
                </View>
            </View>

            
          
        </View>
    )
}
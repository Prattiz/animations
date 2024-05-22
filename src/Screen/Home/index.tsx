import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header/Header";
import { AnimationCard } from "../../components/AnimationCard/AnimationCard";
import { animations } from "../../data/animations";

export function Home(){

    return(
        <View style={styles.container}> 

            <Header 
                backButton={false}
                title="Animations in React Native"
                subtitle="come to see it"
            />

            <FlatList
                data={animations}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return( 
                        <AnimationCard
                            animations={item.animation}
                            content={item}
                        />
                    )
                }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.cards}
            />
        </View>
    )
}
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { RestaurantInfo } from '../components/restaurant-info.component'
import { SafeArea } from '../../../utility/safe-area.component'

export const RestaurantDetailScreen = ({ route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false)
    const [lunchExpanded, setLunchExpanded] = useState(false)
    const [dinnerExpanded, setDinnerExpanded] = useState(false)
    const [drinksExpanded, setDrinksExpanded] = useState(false)


    const { restaurant } = route.params
    return (
        <SafeArea>

            <RestaurantInfo restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title='Breakfast'
                    titleStyle={{color:'black'}}
                    left={(props) => <List.Icon {...props} icon='bread-slice' color='dodgerblue'/>}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>

                <List.Accordion
                    title='Lunch'
                    titleStyle={{color:'black'}}
                    left={(props) => <List.Icon {...props} icon='hamburger' color='dodgerblue'/>}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Burger w/ Fries" />
                    <List.Item title="Steak Sandwich" />
                    <List.Item title="Mushroom Soup" />
                </List.Accordion>
                <List.Accordion
                    title='Dinner'
                    titleStyle={{color:'black'}}
                    left={(props) => <List.Icon {...props} icon='food-variant'color='dodgerblue' />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                    <List.Item title="Steak Frites" />
                </List.Accordion>

                <List.Accordion
                    title='Drinks'
                    titleStyle={{color:'black'}}
                    left={(props) => <List.Icon {...props} icon='cup' color='dodgerblue'/>}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Coffee" />
                    <List.Item title="Tea" />
                    <List.Item title="Modelo" />
                    <List.Item title="Coke" />
                    <List.Item title="Fanta" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}
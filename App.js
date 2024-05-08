import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './components/Home';
import  Pokemons  from './components/Pokemons';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Pokemons" component={Pokemons} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

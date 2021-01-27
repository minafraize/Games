import Home from '../components/home/home.vue';
import GameDetails from '../components/gameDetails/gameDetails.vue';

export default [
    {path: '/', component: Home},
    {path: '/game/:id', component: GameDetails}
]
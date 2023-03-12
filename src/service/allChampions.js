import axios from 'axios';

const allChampions = axios.create({
  baseURL:
    'https://ddragon.leagueoflegends.com/cdn/13.4.1/data/pt_BR/champion.json',
});

export default allChampions;

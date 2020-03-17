import Axios from 'axios';

export default async function fetchExercicies() {
  Alert('Produtos coletados com sucesso');
  return await Axios.get('http://localhost:8080/exercicies')
}
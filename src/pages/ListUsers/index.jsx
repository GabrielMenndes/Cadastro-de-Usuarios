import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/index.jsx'
import TopBackground from '../../components/TopBackground/index.jsx';
import { CardUsers, Container, ContainerUsers, TrashIcon, Title, AvatarUser } from './styles.js';
import Trash from '../../assets/trash.svg';

function ListUsers() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get('/usuarios');
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        alert('Erro ao carregar usuários');
      }
    }
    getUsers();
  }, [])

  async function deleteUser(id) {
    if (!window.confirm('Tem certeza que deseja deletar este usuário?')) {
      return;
    }
    try {
      await api.delete(`/usuarios/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      alert('Erro ao deletar usuário');
    }
  }


  return (
    <Container>
      <TopBackground />
      <Title>Listagem De Usuários</Title>

      <ContainerUsers>

        {users.map(user => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://i.pravatar.cc/150?u=${user.email}`} alt={user.name} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt='icone=Trash' onClick={()=> deleteUser(user.id)} />

          </CardUsers>
        ))}

      </ContainerUsers>

      <Button type="button" onClick={()=> navigate("/")} > Voltar </Button>

    </Container>
  );
}

export default ListUsers;
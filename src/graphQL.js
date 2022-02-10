import { useQuery, gql } from '@apollo/client';

const dummyQuery = gql`{
  user(id: 1) {
    id
    name
  }
}`



export default dummyQuery;
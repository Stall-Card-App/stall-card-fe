import { useQuery, gql } from '@apollo/client';

const dummyQuery = gql`{
  user(id: 1) {
    id
    name
  }
}`

const fetchAllHorses = gql`
query {
  fetchHorses {
    id
    name
    stallNumber
    age
    breed
    sex
    color
    markings
    notes
    amFeed
    pmFeed
    supplements
    turnout
    blanketingTemp
    barnId
    ownerId
    vetId
    farrierId
  }
}`

const fetchHorse = gql`
query fetchHorse($id: ID!) {
  fetchHorse(id: $id) {
    id
    name
    stallNumber
    age
    breed
    sex
    color
    markings
    notes
    amFeed
    pmFeed
    supplements
    turnout
    blanketingTemp
    barnId
    ownerId
    vetId
    farrierId
  }
}`


export {dummyQuery, fetchAllHorses, fetchHorse};
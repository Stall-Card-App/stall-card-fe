import { gql } from '@apollo/client';

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

const addHorseQuery = gql`
mutation AddHorse($input: AddHorseInput!) {
  addHorse(input: $input) {
    horse {
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
  }
}
`

const addOwnerQuery = gql`
  mutation AddOwner($input: AddOwnerInput!) {
    addOwner(input: $input) {
      owner {
        id
        phoneNumber
        name
      }
    }
  }`

const addVetQuery = gql`
  mutation AddVet($input: AddVetInput!) {
    addVet(input: $input) {
      vet {
        id
        phoneNumber
        name
      }
    }
  }`

const addFarrierQuery = gql`
  mutation AddFarrier($input: AddFarrierInput!) {
    addFarrier(input: $input) {
      farrier {
        id
        phoneNumber
        name
      }
    }
  }`

const fetchVet = gql`
query FetchVet($id: ID!) {
  fetchVet(id: $id) {
    id
    name
    phoneNumber
  }
}
`

const fetchFarrier = gql`
query FetchFarrier($id: ID!) {
  fetchFarrier(id: $id) {
    id
    name
    phoneNumber
  }
}
`

const fetchOwner = gql`
query FetchOwner($id: ID!) {
  fetchOwner(id: $id) {
    id
    name
    phoneNumber
  }
}
`

const fetchAllVets = gql`
query {
  fetchVets {
    id
    name
    phoneNumber
  }
}
`

const fetchAllOwners = gql`
query {
  fetchOwners {
    id
    name
    phoneNumber
  }
}
`

const fetchAllFarriers = gql`
query {
  fetchFarriers {
    id
    name
    phoneNumber
  }
}
`

export {dummyQuery, fetchAllHorses, fetchHorse, addHorseQuery, fetchVet, fetchFarrier, fetchOwner, addFarrierQuery, addVetQuery, addOwnerQuery, fetchAllFarriers, fetchAllOwners, fetchAllVets};
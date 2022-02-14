export const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    body.hasOwnProperty('query') && body.query.includes(operationName)
  )
}

export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`
  }
}

export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`
  }
}
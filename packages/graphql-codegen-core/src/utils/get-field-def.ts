import { GraphQLField, GraphQLInterfaceType, GraphQLObjectType } from 'graphql';

export function getFieldDef(parentType, fieldAST): GraphQLField<any, any> {
  const name = fieldAST.name.value;

  if (name === '__typename') {
    return null;
  }

  if (parentType instanceof GraphQLObjectType ||
    parentType instanceof GraphQLInterfaceType) {
    return parentType.getFields()[name];
  }

  return null;
}

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import About from './documents/about'
import Page from './documents/page'
import Person from './documents/person'
import Quote from './documents/quote'
import Statistic from './documents/statistic'

// Object types

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    About,
    Page,
    Person,
    Quote,
    Statistic,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})

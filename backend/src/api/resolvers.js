const mergeResolvers = require('./shared/utils/mergeGraphqlResolvers');

const sharedTypes = require('./shared/types');

const settingsTypes = require('./settings/types');
const settingsQueries = require('./settings/queries');
const settingsMutations = require('./settings/mutations');

const authTypes = require('./auth/types');
const authQueries = require('./auth/queries');
const authMutations = require('./auth/mutations');

const iamTypes = require('./iam/types');
const iamQueries = require('./iam/queries');
const iamMutations = require('./iam/mutations');

const auditLogTypes = require('./auditLog/types');
const auditLogQueries = require('./auditLog/queries');
const auditLogMutations = require('./auditLog/mutations');

const teamTypes = require('./team/types');
const teamQueries = require('./team/queries');
const teamMutations = require('./team/mutations');

const projectTypes = require('./project/types');
const projectQueries = require('./project/queries');
const projectMutations = require('./project/mutations');

const sprintTypes = require('./sprint/types');
const sprintQueries = require('./sprint/queries');
const sprintMutations = require('./sprint/mutations');

const complexityChangeTypes = require('./complexityChange/types');
const complexityChangeQueries = require('./complexityChange/queries');
const complexityChangeMutations = require('./complexityChange/mutations');

const phaseTypes = require('./phase/types');
const phaseQueries = require('./phase/queries');
const phaseMutations = require('./phase/mutations');

const storyTypes = require('./story/types');
const storyQueries = require('./story/queries');
const storyMutations = require('./story/mutations');

const types = [
  ...sharedTypes,
  ...iamTypes,
  ...authTypes,
  ...auditLogTypes,
  ...settingsTypes,
  ...teamTypes,
  ...projectTypes,
  ...sprintTypes,
  ...complexityChangeTypes,
  ...phaseTypes,
  ...storyTypes,
].map((type) => type.resolver);

const queries = [
  ...iamQueries,
  ...authQueries,
  ...auditLogQueries,
  ...settingsQueries,
  ...teamQueries,
  ...projectQueries,
  ...sprintQueries,
  ...complexityChangeQueries,
  ...phaseQueries,
  ...storyQueries,
].map((query) => query.resolver);

const mutations = [
  ...iamMutations,
  ...authMutations,
  ...auditLogMutations,
  ...settingsMutations,
  ...teamMutations,
  ...projectMutations,
  ...sprintMutations,
  ...complexityChangeMutations,
  ...phaseMutations,
  ...storyMutations,
].map((mutation) => mutation.resolver);

module.exports = mergeResolvers(types, queries, mutations);

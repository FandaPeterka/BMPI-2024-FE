/* eslint-disable */

const rehearsalCreateDtoInType = shape({
  locationId: string(1, 128).isRequired(),
  date: datetime(),
  actId: string(1, 128),
  presenceList: array(uuIdentity(), 0, 10)
});

const rehearsalListDtoInType = shape({
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const rehearsalUpdateDtoInType = shape({
  id: id().isRequired(),
  date: datetime(),
  valid: boolean(),
  sceneList: array(string(1, 128)),
  presenceList: array(uuIdentity(), 0, 10),
});

const rehearsalMemberListDtoInType = shape({
  id: id().isRequired()
});

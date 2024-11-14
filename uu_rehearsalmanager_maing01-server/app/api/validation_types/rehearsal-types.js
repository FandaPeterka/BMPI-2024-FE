/* eslint-disable */

const rehearsalCreateDtoInType = shape({
  locationId: string(1, 128).isRequired(),
  date: date(),
  sceneList: array(string(1, 128)),
  presenceList: array(string(30), 0, 10)
});

const rehearsalListDtoInType = shape({
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const rehearsalUpdateDtoInType = shape({
  id: id().isRequired(),
  date: date(),
  valid: boolean(),
  sceneList: array(string(1, 128)),
  presenceList: array(string(30), 0, 10),
});

/* eslint-disable */

const sceneCreateDtoInType = shape({
  actId: string(1, 128).isRequired()
});

const sceneListDtoInType = shape({
  actId: string(1, 128).isRequired(),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const sceneUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(1, 255),
  description: string(1, 4000),
  publicDescription: string(1, 4000),
  characterList: array(shape({
    name: string(1, 255),
    actorList: array(uuIdentity(), 0, 10)
  }), 0, 50)
});

const sceneDeleteDtoInType = shape({
  id: id().isRequired()
});

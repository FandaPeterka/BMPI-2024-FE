/* eslint-disable */

const locationListDtoInType = shape({
    active: boolean(),
    pageInfo: shape({
        pageIndex: integer(),
        pageSize: integer()
    })
});

const locationCreateDtoInType = shape({
    name: string(1, 255).isRequired(),
    address: string(1, 2000).isRequired(),
    active: boolean().isRequired()
});
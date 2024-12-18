// src/api/api.js

const API_BASE_URI = "http://localhost:8080/uu-rehearsalmanager-maing01/22222222222222222222222222222222";

// System Workspace Endpoints
export const SYS_WORKSPACE_INIT = `${API_BASE_URI}/sys/uuAppWorkspace/init`;
export const SYS_WORKSPACE_LOAD = `${API_BASE_URI}/sys/uuAppWorkspace/load`;
export const SYS_WORKSPACE_LOAD_BASIC_DATA = `${API_BASE_URI}/sys/uuAppWorkspace/loadBasicData`;

// Scene Endpoints
export const SCENE_CREATE = `${API_BASE_URI}/scene/create`;
export const SCENE_LIST = `${API_BASE_URI}/scene/list`;
export const SCENE_UPDATE = `${API_BASE_URI}/scene/update`;
export const SCENE_DELETE = `${API_BASE_URI}/scene/delete`;

// Location Endpoints
export const LOCATION_LIST = `${API_BASE_URI}/location/list`;
export const LOCATION_CREATE = `${API_BASE_URI}/location/create`;
export const LOCATION_UPDATE = `${API_BASE_URI}/location/update`;

// Rehearsal Endpoints
export const REHEARSAL_CREATE = `${API_BASE_URI}/rehearsal/create`;
export const REHEARSAL_LIST = `${API_BASE_URI}/rehearsal/list`;
export const REHEARSAL_UPDATE = `${API_BASE_URI}/rehearsal/update`;
export const REHEARSAL_MEMBER_LIST = `${API_BASE_URI}/rehearsal/member/list`;

// Actor Endpoints
export const ACTOR_LIST = `${API_BASE_URI}/actor/list`;

// Main Workspace Endpoints
export const INIT_APP_WORKSPACE = `${API_BASE_URI}/sys/uuAppWorkspace/init`;
export const LOAD_APP_WORKSPACE = `${API_BASE_URI}/sys/uuAppWorkspace/load`;
export const LOAD_BASIC_DATA = `${API_BASE_URI}/sys/uuAppWorkspace/loadBasicData`;

// Notification Endpoints
export const NOTIFICATION_CREATE = `${API_BASE_URI}/notification/create`;
export const NOTIFICATION_LIST = `${API_BASE_URI}/notification/list`;
export const NOTIFICATION_UPDATE = `${API_BASE_URI}/notification/update`;

// Permission Endpoints
export const SYS_WORKSPACE_PERMISSION_LIST = `${API_BASE_URI}/sys/uuAppWorkspace/permission/list`;

export default {
  API_BASE_URI,
  SYS_WORKSPACE_INIT,
  SYS_WORKSPACE_LOAD,
  SYS_WORKSPACE_LOAD_BASIC_DATA,
  SCENE_CREATE,
  SCENE_LIST,
  SCENE_UPDATE,
  SCENE_DELETE,
  LOCATION_LIST,
  LOCATION_CREATE,
  LOCATION_UPDATE,
  REHEARSAL_CREATE,
  REHEARSAL_LIST,
  REHEARSAL_UPDATE,
  REHEARSAL_MEMBER_LIST,
  ACTOR_LIST,
  INIT_APP_WORKSPACE,
  LOAD_APP_WORKSPACE,
  LOAD_BASIC_DATA,
  NOTIFICATION_CREATE,
  NOTIFICATION_LIST,
  NOTIFICATION_UPDATE,
  SYS_WORKSPACE_PERMISSION_LIST,
};
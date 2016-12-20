// ------------------------------------
// Constants
// ------------------------------------
export const GRID_UPDATE = 'GRID_UPDATE'

// ------------------------------------
// Actions
// ------------------------------------
export function update (value) {
  return {
    type    : GRID_UPDATE,
    payload : value
  }
}

export const actions = {
  update
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GRID_UPDATE] : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function gridReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

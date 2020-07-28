import { getMockState } from 'src/mocks'
import { actionTypes, appStates } from './action-types'
import reducer from './AppReducer'

describe('AppReducer', () => {
  let idea: any
  let state: any

  beforeEach(() => {
    idea = { title: 'some idea', description: 'some other idea' }
    state = getMockState()
  })

  afterEach(() => {
    idea = null
    state = null
    jest.resetAllMocks()
  })

  it('should set state to loading when IDEA_UPDATE', () => {
    const newState = reducer(state, { type: actionTypes.IDEA_UPDATE, payload: idea })
    expect(newState).toEqual({ ...state, status: appStates.LOADING })
  })

  it('should remove error and set state LOADED when IDEA_UPDATE_SUCCESS', () => {
    const newState = reducer({ ...state, error: 'foo bar' }, { type: actionTypes.IDEA_UPDATE_SUCCESS, payload: 'foo bar' })
    expect(newState).toEqual({ ...state, status: appStates.LOADED, error: null })
  })

  it('should add erro when IDEA_UPDATE_ERROR', () => {
    const newState = reducer(state, { type: actionTypes.IDEA_UPDATE_ERROR, payload: 'foo bar' })
    expect(newState).toEqual({ ...state, status: appStates.LOADED, error: 'foo bar' })
  })
})

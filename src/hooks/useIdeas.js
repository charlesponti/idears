import { useContext, useEffect } from 'react'
import { actionTypes, getIdeas } from 'src/actions'
import { IdeasContext } from 'src/providers/IdeasProvider'

export default function useIdeas () {
  const { state, dispatch } = useContext(IdeasContext)
  const { ideas, error, isLoading } = state

  useEffect(() => {
    async function fetchData () {
      dispatch({ type: actionTypes.FETCH_IDEAS })

      try {
        const ideas = await getIdeas()
        dispatch({ type: actionTypes.FETCH_IDEAS_SUCCESS, payload: ideas })
      } catch (error) {
        dispatch({ type: actionTypes.FETCH_IDEAS_ERROR, error: error.message })
      }
    }

    fetchData()
  }, [dispatch])

  return { isLoading, ideas, error }
}

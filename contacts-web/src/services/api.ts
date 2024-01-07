import { useMutation, useQuery } from 'vue-query'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8000/api'
})

export function fetchContacts(q: string = '') {
  return useQuery('contacts', {
    queryFn: () => api.get('/persons', { data: { q } })
  })
}

export function trashContacts(ids: string[]) {
  return useMutation({
    mutationFn: () => api.delete('/persons/trash-many', { data: { ids } })
  })
}

import { useMutation, useQuery, useQueryClient } from 'vue-query'
import axios from 'axios'
import type { FormModel } from '@/models'

export const api = axios.create({
  baseURL: 'http://localhost:8000/api'
})

export function fetchContacts(q: string = '') {
  return useQuery({
    queryKey: 'contacts',
    queryFn: () => api.get('/contacts', { data: { q } })
  })
}

export function fetchContact(id: string) {
  return useQuery(`contact-${id}`, {
    queryFn: () => api.get(`/contacts/${id}`)
  })
}

export function trashContacts(ids: string[]) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => api.delete('/contacts/trash-many', { data: { ids } }),
    onSuccess: () => {
      queryClient.refetchQueries(['contacts'])
    }
  })
}

export function storeContact() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: FormModel) => api.post('/contacts', data),
    onSuccess: () => {
      queryClient.refetchQueries(['contacts'])
    }
  })
}

export function updateContact(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: FormModel) => api.put(`/contacts/${id}`, data),
    onSuccess: () => {
      queryClient.refetchQueries(['contacts', `contact-${id}`])
    }
  })
}

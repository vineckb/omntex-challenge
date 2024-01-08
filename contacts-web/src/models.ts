export interface ContactType {
  id: string
  name: string
  phone?: string
  email?: string
  alias?: string
  avatarUrl?: string
  company?: string
  address?: string
  birthdate?: string
  site?: string
}

export type FormModel = Omit<ContactType, 'id' | 'name'> & {
  name?: string
}

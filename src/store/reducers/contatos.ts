// import { Contato } from './../../components/Contato/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatoClass from '../../models/Contato'

type ContatosState = {
  itens: ContatoClass[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Jason Ex',
      email: 'Jasonex@gmail.com',
      telefone: '01399503039'
    },
    {
      id: 2,
      nome: 'Fred Krugger',
      email: 'fredkrugger@gmail.com',
      telefone: '01399503039'
    },
    {
      id: 3,
      nome: 'Nancy Manfield',
      email: 'nancy123fredvemtepegar@gmail.com',
      telefone: '01399503039'
    },
    {
      id: 4,
      nome: 'Jonas Silva',
      email: 'jonasSsilva@gmail.com',
      telefone: '01399503039'
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    deletar: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<ContatoClass>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExistente) {
        alert('Contato já cadastrado')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { deletar, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer

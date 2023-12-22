<template>
  <v-container
    class="mt-5"
  >
    <v-row
      justify="space-around"
    >
      <v-col
        cols="auto"
        class="configuration__container"
      >
        <v-row
          class="px-5"
        >
          <v-col
            cols="auto"
          >
            <h2>Configurações</h2>
          </v-col>
        </v-row>

        <v-row
          v-for="option in configurationOptions"
          :key="option.title"
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
              @click="handleConfigurationOpenModalCall(option.title)"
            >
              {{ option.title }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="auto"
        class="report__container"
      >
        <v-row
          class="px-5"
        >
          <v-col
            cols="auto"
          >
            <h2>Relatórios</h2>
          </v-col>
        </v-row>

        <v-row
          v-for="option in reportOptions"
          :key="option.title"
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
            >
              {{ option.title }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <CreatePerson
    v-if="shouldOpenCreatePersonModal"
    @closeModal="closeCreatePersonModal"
  />

  <CreateEvent
    v-if="shouldOpenCreateEventModal"
    @closeModal="closeCreateEventModal"
  />

  <CreateAward
    v-if="shouldOpenCreateAwardModal"
    @closeModal="closeCreateAwardModal"
  />

  <CreateMovie
    v-if="shouldOpenCreateMovieModal"
    @closeModal="closeCreateMovieModal"
  />
  <CreateEdition
    v-if="shouldOpenCreateGiveAwardModal"
    @closeModal="closeCreateGiveAwardModal"
  />
</template>

<script>
import CreatePerson from '@/components/Modals/CreatePerson.vue'
import CreateEvent from '@/components/Modals/CreateEvent.vue'
import CreateAward from '@/components/Modals/CreateAward.vue'
import CreateMovie from '@/components/Modals/CreateMovie.vue'
import CreateEdition from '@/components/Modals/CreateEdition.vue'

export default {
  name: 'AppHome',
  components: {
    CreatePerson,
    CreateEvent,
    CreateAward,
    CreateMovie,
    CreateEdition,
},
  data() {
    return {
      shouldOpenCreatePersonModal: false,
      shouldOpenCreateEventModal: false,
      shouldOpenCreateAwardModal: false,
      shouldOpenCreateMovieModal: false,
      shouldOpenCreateGiveAwardModal: false,
      configurationOptions: [
        { title: 'Inserir Nova Pessoa' },
        { title: 'Inserir Novo Evento' },
        { title: 'Inserir Novo Prêmio' },
        { title: 'Inserir Nova Edição' },
        { title: 'Inserir Novo Filme' },
        { title: 'Inserir Premiação para Filme' },
        { title: 'Inserir Premiação para Ator (Atriz)' },
      ],
      reportOptions: [
        { title: 'As 10 Pessoas Mais Premiadas' },
        { title: 'Os 10 Filmes Mais Premiadas' },
        { title: 'Os 10 Filmes com Maior Bilheteria' },
        { title: 'Melhores Atores (Atrizes)' },
        { title: 'Vencedores de Prêmios' },
      ]
    }
  },
  methods: {
    handleConfigurationOpenModalCall(title) {
      if (title === 'Inserir Nova Pessoa') this.openCreatePersonModal()

      if (title === 'Inserir Novo Evento') this.openCreateEventModal()

      if (title === 'Inserir Novo Prêmio') this.openCreateAwardModal()

      if (title === 'Inserir Nova Edição') this.openCreateGiveAwardModal()
      
      if (title === 'Inserir Novo Filme') this.openCreateMovieModal()

      if (title === 'Inserir Premiação para Filme') this.openCreateMovieAward()

      if (title === 'Inserir Premiação para Ator (Atriz)') this.openCreatePersonAward()

    },
    openCreatePersonModal() {
      this.shouldOpenCreatePersonModal = true
    },
    closeCreatePersonModal() {
      this.shouldOpenCreatePersonModal = false
    },
    openCreateEventModal() {
      this.shouldOpenCreateEventModal = true
    },
    closeCreateEventModal() {
      this.shouldOpenCreateEventModal = false
    },
    openCreateAwardModal() {
      this.shouldOpenCreateAwardModal = true 
    },
    closeCreateAwardModal() {
      this.shouldOpenCreateAwardModal = false 
    },
    openCreateMovieModal() {
      this.shouldOpenCreateMovieModal = true 
    },
    closeCreateMovieModal() {
      this.shouldOpenCreateMovieModal = false 
    },
    openCreateGiveAwardModal(){
      this.shouldOpenCreateGiveAwardModal = true
    },
    closeCreateGiveAwardModal() {
      this.shouldOpenCreateGiveAwardModal = false
    },
  },
}
</script>

<style>
  .configuration__container, .report__container {
    border: 1px solid;
    border-radius: 1rem
  };
</style>

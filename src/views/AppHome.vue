<template>
  <v-container
    class="mt-5"
  >
    <v-row>
      <v-col>
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
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
              @click="openCreatePersonModal"
            >
              Inserir uma nova Pessoa
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
              @click="openCreateEventModal"
            >
              Inserir um novo Evento
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
              @click="openCreateAwardModal"
            >
              Inserir um novo Prêmio
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
              @click="openCreateGiveAwardModal"
            >
              Inserir uma nova Premiação
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
              @click="openCreateMovieModal"
            >
              Inserir um novo Filme
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
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
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
            >
              As 10 pessoas mais premiadas
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
            >
              Os 10 filmes mais premiados
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
            >
              Os 10 filmes com maior arrecadação
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
            >
              Pessoas nomeadas melhores atores (atrizes) em todos eventos
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          class="px-5"
        >
          <v-col>
            <v-btn
              variant="outlined"
            >
              Vencedores de prêmio
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
  <CreateGiveAward
    v-if="shouldOpenCreateGiveAwardModal"
    @closeModal="closeCreateGiveAwardModal"
  />
</template>

<script>
import CreatePerson from '@/components/Modals/CreatePerson.vue'
import CreateEvent from '@/components/Modals/CreateEvent.vue'
import CreateAward from '@/components/Modals/CreateAward.vue'
import CreateMovie from '@/components/Modals/CreateMovie.vue'
import CreateGiveAward from '@/components/Modals/CreateGiveAward.vue'

export default {
  name: 'AppHome',
  components: {
    CreatePerson,
    CreateEvent,
    CreateAward,
    CreateMovie,
    CreateGiveAward,
},
  data() {
    return {
      shouldOpenCreatePersonModal: false,
      shouldOpenCreateEventModal: false,
      shouldOpenCreateAwardModal: false,
      shouldOpenCreateMovieModal: false,
      shouldOpenCreateGiveAwardModal: false,
    }
  },
  methods: {
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

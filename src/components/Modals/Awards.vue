<template>
	<v-dialog
		:model-value="true"
		max-width="1350"
		persistent
	>
		<v-card>
			<v-card-title>
				<v-container>
					<v-row>
						<v-col
							cols="11"
						>
							<h2>
                Indicados a Prêmios
              </h2>
						</v-col>

						<v-col
							cols="1"
							justify="end"
						>
							<v-btn
								variant="text"
								density="comfortable"
								icon="mdi-close"
								@click="closeModal"
							/>
						</v-col>
					</v-row>
				</v-container>
			</v-card-title>

			<v-card-text>
				<v-container
          fluid
        >
					<v-row
            justify="center"
          >
            <v-col
              cols="10"
            >
              <v-data-table
                :items="data"
                :headers="headers"
              >
                <template v-slot:item.premiado="{ item }">
                    {{ item.premiado ? 'Premiado' : 'Não Premiado' }}
                </template>
              </v-data-table>
            </v-col>
          </v-row>
				</v-container>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MostAwardedPerson',
  data()  {
    return {
      actors: [],
      movies: [],
      data: [],
      headers: [
        { title: 'Filme', key: 'filme_titulo_original' },
        { title: 'Ator (Atriz)', key: 'pessoa_nome_art' },
        { title: 'Premio', key: 'premio_nome' },
        { title: 'Premiado', key: 'premiado'},
        { title: 'Tipo Prêmio', key: 'tipo'},
      ]
    }
  },
  async mounted() {
    const reponseActors = await axios.get('/pessoa_premiadas')
    this.actors = reponseActors.data

    const reponseMovies = await axios.get('/filme_premiados')
    this.movies = reponseMovies.data

    this.data = [
      ...this.movies,
      ...this.actors,
    ]
  },
  methods: {
    closeModal() {
			this.$emit('closeModal')
    },
  },
}
</script>

<template>
	<v-dialog
		max-width="800"
		:model-value="true"
		persistent
		@click:outside="closeModal"
	>
		<v-card>
			<v-card-title>
				<v-container>
					<v-row>
						<v-col
							cols="11"
						>
						<h2>
							Cadastrar Premiação
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
				<v-container>
					<v-row>
						<v-col>
							<v-autocomplete
								label="Filme"
								multiple
								clearable
								:items="movies"
							/>
						</v-col>

						<v-col>
							<v-autocomplete
								label="Premio"
								multiple
								clearable
								:items="awards"
							/>
						</v-col>

						<v-col>
							<v-select
								v-model="isAwarded"
								label="É premiado"
								multiple
								clearable
								:items="isAwardedOptions"
							/>
						</v-col>
					</v-row>

					<v-row
            justify="end"
          >
            <v-col
              cols="2"
            >
              <v-btn
                variant="flat"
                color="#FA7654"
                @click="closeModal"
              >
                Cancelar
              </v-btn>
            </v-col>

            <v-col
              cols="auto"
            >
              <v-btn
                variant="flat"
                color="#FAC95F"
                @click="handleCreateMovieAward"
              >
                Cadastrar Premiação
              </v-btn>
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
	name: 'CreateMovieAward',
	data() {
		return {
			movies: [],
			awards: [],
			selectedMovies: [],
			isAwardedOptions: ['Sim', 'Não']
		}
	},
	async mounted() {
		const moviesReponse = await axios.get('/filme')
		this.movies = moviesReponse.data

		const awardsReponse = await axios.get('/premio')
		this.award = awardsReponse.data
	},
	methods: {
		closeModal() {
			this.$emit('closeModal')
		},
		handleCreateMovieAward() {
			console.log('Criando Premiação....')
		},
	}
}
</script>

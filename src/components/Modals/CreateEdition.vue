<template>
	<v-dialog
		max-width="800"
		:model-value="true"
		:persistent="true"
	>
		<v-card>
			<v-card-title>
				<v-container>
					<v-row>
						<v-col
							cols="11"
						>
							<h2>
							Cadastrar Edição
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
							<v-text-field
								v-model="year"
								label="Ano"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-autocomplete
								v-model="event"
								label="Evento"
								return-object
								item-title="nome"
								item-value="nome"
								:items="events"
								:clearable="true"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-text-field
								v-model="place"
								label="Local"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="date"
								label="Data"
								:clearable="true"
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
                @click="handleCreateEdition"
              >
                Cadastrar Premiação
              </v-btn>
            </v-col>
          </v-row>
				</v-container>
			</v-card-text>
		</v-card>

		<v-snackbar
			v-model="shouldShowSnackBar"
			color="#FAC95F"
			elevation="24"
			:timeout="2000"
			location="center"
		>
			<p>{{ snackBarMessage }}</p>
	
			<template v-slot:actions>
				<v-btn
					color="pink"
					variant="text"
					@click="closeSnackbar"
				>
					Close
				</v-btn>
			</template>
		</v-snackbar>
	</v-dialog>

</template>

<script>
import axios from 'axios'

export default {
	name: 'CreateEvent',
	emits: [
		'closeModal',
	],
	data() {
		return {
			event: '',
			events: [],
			place: '',
			shouldShowSnackbar: false,
			snackbarMessage: '',
			date: '',
			year: '',
		}
	},
	async mounted() {
		const response = await axios.get('/evento')
		this.events = response.data
	},
	methods: {
		closeModal() {
			this.$emit('closeModal')
		},
		async handleCreateEdition() {
			const response = axios.post('/edicao', {
				event: this.event,
				date: this.date,
				place: this.place,
				year: this.year,
			})

			if (response.status === 200) {
				this.snackbarMessage = 'Edição cadastrar com sucesso!!!'
				this.shouldShowSnackbar = true
				return
			}

			if (response.status === 500) {
				this.snackbarMessage = 'Erro ao cadsatrar Edição, verifique os campos'
				this.shouldShowSnackbar = true
			}
		},
	}
}
</script>

<template>
	<v-dialog
		max-width="800"
		:model-value="true"
		:persistent="true"
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
								label="Premio"
								multiple
								:clearable="true"
								:items="awards"
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
                @click="handleCreateGiveAward"
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

export default {
	name: 'CreateGiveAward',
	data() {
		return {
			selectedMovies: [],
			awards: ['teste1', 'teste2']
		}
	},

	methods: {
		closeModal() {
			this.$emit('closeModal')
		},
		handleCreateGiveAward() {
			console.log('Criando Premiação....')
		},
	}
}
</script>

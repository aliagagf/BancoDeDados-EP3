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
							Cadastrar Filme
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
								v-model="originalTitle"
								label="Título Original"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="productionYear"
								label="Ano de Produção"
								:clearable="true"
							/>
						</v-col>

                        <v-col>
							<v-text-field
								v-model="launchDate"
								label="Data de Estreia"
								:clearable="true"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-text-field
								v-model="brazilianTitle"
								label="Título no Brasil"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="genre"
								label="Gênero"
								:clearable="true"
							/>
						</v-col>

                        <v-col>
							<v-text-field
								v-model="originalLanguage"
								label="Idioma Original"
								:clearable="true"
							/>
						</v-col>
					</v-row>

                    <v-row>
						<v-col>
							<v-text-field
								v-model="firstYearFund"
								label="Arrecadação no Primeiro Ano"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="type"
								label="Tipo"
								:clearable="true"
                                :items="types"
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
                @click="handleCreateMovie"
              >
                Cadastrar Filme
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
	name: 'CreateMovie',
	data() {
		return {
			originalTitle: '',
			productionYear: '',
			launchDate: '',
			brazilianTitle: '',
            genre: '',
            originalLanguage: '',
            firstYearFund:'',
            type:'',
            types:['Documentário', 'Outros'],
		}
	},
	methods: {
		closeModal() {
			this.$emit('closeModal')
		},
		handleCreateMovie() {
			console.log('Criando Filme....')
		},
	}
}
</script>

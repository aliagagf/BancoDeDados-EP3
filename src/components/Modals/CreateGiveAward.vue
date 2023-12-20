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
                <v-switch
                    v-model="model"
                    hide-details
                    true-value="Pessoa"
                    false-value="Filme"
                    :label="'Prêmio: ${model.toString()}'"
                ></v-switch>
				<v-container>
					<v-row>
						<v-col>
							<v-text-field
								v-model="awardType"
								label="Tipo de Prêmio"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="awardEditionYear"
								label="Ano da Edição do Prêmio"
								:clearable="true"
							/>
						</v-col>

                        <v-col>
							<v-text-field
								v-model="awardEditionNameEvent"
								label="Nome do Evento da Edição do Prêmio"
								:clearable="true"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-text-field
								v-model="personArtName"
								label="Nome artístico da Pessoa"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="originalMovieTitle"
								label="Título Original do Filme"
								:clearable="true"
							/>
						</v-col>

                        <v-col>
							<v-text-field
								v-model="movieProductionYear"
								label="Ano de Produção do Filme"
								:clearable="true"
							/>
						</v-col>
					</v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="won"
                                label="Ganhou"
                                :clearable="true"                           
                            />        
                        </v-col>
                        <v-col></v-col>
                        <v-col></v-col>
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

            <v-card-text>
				<v-container>
					<v-row>
						<v-col>
							<v-text-field
								v-model="originalMovieName"
								label="Título Original do Filme"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="movieYearProduction"
								label="Ano de Produção do Filme"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="awardTypeMovie"
								label="Tipo do Prêmio"
								:clearable="true"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-text-field
								v-model="awardEditionYear"
								label="Ano da Edição do Prêmio"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="awardEditionNameEvent"
								label="Nome do Evento da Edição do Prêmio"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="awarded"
								label="Premiado"
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
			awardType: '',
			awardEditionYear: '',
			awardEditionNameEvent: '',
			personArtName: '',
            originalMovieTitle:'',
            movieProductionYear:'',
            won:'',
            model:true,
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

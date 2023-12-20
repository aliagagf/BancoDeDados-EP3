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
							Cadastrar Evento
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
								v-model="eventName"
								label="Nome"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="nationality"
								label="Nacionalidade"
								:clearable="true"
							/>
						</v-col>
					</v-row>

					<v-row>
						<v-col>
							<v-text-field
								v-model="type"
								label="Tipo"
								:clearable="true"
							/>
						</v-col>

						<v-col>
							<v-text-field
								v-model="startYear"
								label="Ano Inicio do Evento"
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
                @click="handleCreatePerson"
              >
                Cadastrar Evento
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
	name: 'CreateEvent',
	data() {
		return {
			eventName: '',
			type: '',
			nationality: '',
			startYear: '',
		}
	},
	methods: {
		closeModal() {
			this.$emit('closeModal')
		},
		handleCreateEvent() {
			console.log('Criando Pessoa....')
		},
	}
}
</script>

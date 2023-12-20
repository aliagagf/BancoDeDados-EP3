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
              Cadastrar Pessoas
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
                v-model="artisticName"
                label="Nome Artistico"
                :clearable="true"
              />
            </v-col>

            <v-col>
              <v-text-field
                v-model="realName"
                label="Nome"
                :clearable="true"
              />
            </v-col>

            <v-col>
              <v-select
                v-model="gender"
                label="Sexo"
                :items="['Masculino', 'Feminino', 'Outros']"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="birthYear"
                label="Ano de Nascimento"
                :clearable="true"
              />
            </v-col>

            <v-col>
              <v-text-field
                v-model="site"
                label="Site"
                :clearable="true"
              />
            </v-col>

            <v-col>
              <v-text-field
                v-model="startYear"
                label="Ano Inicio na Academia"
                :clearable="true"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="workYears"
                label="Número Total de Anos Trabalhados"
                :clearable="true"
              />
            </v-col>

            <v-col>
              <v-select
                v-model="situation"
                label="Situação"
                :items="['Ativo', 'Inativo']"
              />
            </v-col>

            <v-col>
              <v-select
                v-model="role"
                label="Cargo"
                :items="['Diretor', 'Produtor', 'Roterista', 'Ator']"
                :multiple="true"
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
                Cadastrar Pessoa
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
  name: 'CreatePerson',
    a() {
    return {
      artisticName: '',
      birthYear: '',
      gender: '',
      realName: '',
      role: [],
      site: '',
      situation: '',
      startYear: '',
      workYears: '',
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    handleCreatePerson() {
      console.log('Criando Pessoa....')
    },
  }
}
</script>

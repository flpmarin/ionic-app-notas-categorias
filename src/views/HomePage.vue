<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-searchbar show-clear-button="always" :clear-icon="trashBin" value="Busca categoría"></ion-searchbar>
      <div class="categorias">

        <CardCategory v-for="(elm, index) in asignaturas" :key="index"
          :title="elm.title" 
          :subtitle="elm.subtitle"
          :description="elm.description" 
          :alt="elm.alt" 
          :img="elm.img" />

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonSearchbar } from '@ionic/vue';
import { trashBin } from 'ionicons/icons';
import CardCategory from '@/components/CardCategory.vue';
import { IAsignatura } from '@/interfaces/IAsignatura';
import { Ref, ref } from 'vue';
import classroomImage from '@/assets/img/classroom.jpg';


const asignaturas: Ref<Array<IAsignatura>> = ref([
  {
    title: 'Desarrollo de Interfaces',
    subtitle: 'Profesor: Alejandro',
    description: 'Desarrollo y diseño de frontales',
    alt: 'Imagen de desarrollo de interfaces',
    img: classroomImage
  },
  {
    title: 'Desarrollo de Interfaces',
    subtitle: 'Profesor: Alejandro',
    description: 'Desarrollo y diseño de frontales',
    alt: 'Imagen de desarrollo de interfaces',
    img: 'https://ionicframework.com/docs/img/demos/card-media.png'
  }
])
</script>

<style scoped>
.categorias {
  display: flex;
  flex-wrap: wrap;
}
</style>
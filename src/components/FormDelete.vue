<template>
    <ion-list>
        <ion-label>Eliminar una nota</ion-label>
        <ion-item>
            <ion-select aria-label="Elimina una nota" placeholder="Desplegar  notas">
                <ion-select-option value="apples">Apples</ion-select-option>
                <ion-select-option value="oranges">Oranges</ion-select-option>
                <ion-select-option value="bananas">Bananas</ion-select-option>
            </ion-select>
        </ion-item>
    </ion-list>
</template>

<script lang="ts" setup>
import { IonList, IonSelect, IonSelectOption, IonItem } from '@ionic/vue';

</script>

<style scoped></style>
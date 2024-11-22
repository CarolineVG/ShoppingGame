<script setup lang="ts">
    import {useRouter} from "vue-router";

    const router = useRouter();
    const toGameUI = () => {
        router.push('/game')
    }
</script>

<template>
    <div>
        <h1>Shopping Street</h1>
        <button type="button" @click="toGameUI">Start game</button>
    </div>
</template>
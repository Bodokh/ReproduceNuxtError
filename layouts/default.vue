<template>
    <div class="main-container">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
// main styles
import { useUserStore } from '~~/stores/user';

const navLinks = [
    {
        link: '/about',
        text: 'אודות',
    },
]
const route = useRoute()
const { y } = useWindowScroll()
const isDark = computed(() => route.path !== '/' || y.value > 150)

const userStore = useUserStore();

// Buttons logic
const logged_buttons = computed(() => {

    return userStore.userGet != null ? [
        {
            props: {
                to: '/user/profile',
                outlined: true,
                rounded: true,
                borderless: true,
                icon: 'person',
            },
        }] : [
        {
            props: {
                to: '/logout',
                label: 'התנתק',
                class: 'register_button',
            },
        }
    ];
})

const buttons = computed(() => [
    {
        props: {
            to: '/signup/welcome',
            label: 'כניסה',
            icon: 'plane',
            class: 'register_button',
        },
    },
])

</script>

<style>
.main-container {
    height: 100%;
    padding-top: 75px;
}

@media only screen and (max-width: 600px) {
    .register_button {
        display: none;
    }
}

@media (max-width: 426px) {
    .main-container {
        padding-top: 60px;
    }
}
</style>

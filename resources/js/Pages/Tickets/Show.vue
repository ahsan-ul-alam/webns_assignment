<script setup>
import { defineProps } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
    ticket: Object
});
</script>

<template>
    
    <AuthenticatedLayout>
        <template #default>
            <div class="p-6 bg-white shadow rounded-lg">
                <h1 class="text-xl font-bold mb-4">{{ ticket.title }}</h1>
                <p><strong>Status:</strong> {{ ticket.status }}</p>
                <p><strong>Priority:</strong> {{ ticket.priority }}</p>
                <p><strong>Category:</strong> {{ ticket.category.name }}</p>
                <p><strong>Assigned To:</strong> {{ ticket.agent?.name || 'Unassigned' }}</p>
                <p><strong>Description:</strong> {{ ticket.description }}</p>
            </div>
        </template>
    </AuthenticatedLayout>
</template>

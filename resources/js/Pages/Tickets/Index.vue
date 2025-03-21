<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/Stores/modals';
import { BaseTable, CreateTicketModal, EditTicketModal, DeleteTicketModal } from "@/Features/Tickets";

defineProps({
	comments: {
		type: Array,
		default: () => [],
	},
	tickets: {
		type: Array,
		default: () => [],
	},
	labels: {
		type: Array,
		default: () => [],
	},
	categories: {
		type: Array,
		default: () => [],
	},
	agents: {
		type: Array,
		default: () => [],
	},
	filters: {
		type: Object,
	}
});

const headers = [
	{ label: 'Title', key: 'title' },
	{ label: 'Status', key: 'status' },
	{ label: 'Priority', key: 'priority' },
	{ label: 'Categories', key: 'categories' },
	{ label: 'Assigned To', key: 'agent' },
	{ label: 'Created', key: 'created_at' },
	{ label: 'Actions', key: 'actions' },
];

const modalStore = useModalStore();
const { createTicketModalOpen, editTicketModalOpen, deleteTicketModalOpen } = storeToRefs(modalStore);

const selectedTicket = ref();

function setSelectedTicket(ticket) {
	selectedTicket.value = ticket;
};

function onCreate() {
	createTicketModalOpen.value = true;
}

function onEdit(ticket) {
	editTicketModalOpen.value = true;
	setSelectedTicket(ticket);
}

function onDelete(ticket) {
	deleteTicketModalOpen.value = true;
	setSelectedTicket(ticket);
}
</script>

<template>

	<Head title="Tickets" />
	<AuthenticatedLayout>
		<template #default>
			<BaseTable table-id="tickets" placeholder="Search" :headers="headers" :data="tickets" :filters="filters"
				@on-create="onCreate" @on-edit="onEdit" @on-delete="onDelete">

				<template #button>
					Add
				</template>

				<template #row="{ row }">
					<td>{{ row.title }}</td>
					<td>{{ row.status }}</td>
					<td>{{ row.priority }}</td>
					<td>{{ row.categories }}</td>
					<td>{{ row.agent }}</td>
					<td>{{ row.created_at }}</td>

					<!-- Actions Column -->
					<td>
						<button @click="onEdit(row)">Edit</button>
						<button @click="onDelete(row)">Delete</button>
					</td>

					<!-- Comments Column -->
					<td>
						<!-- Check if there are comments for this ticket -->
						<template v-if="row.comments && row.comments.length > 0">
							<ul>
								<li v-for="comment in row.comments" :key="comment.id">
									{{ comment.text }}
								</li>
							</ul>
						</template>
						<!-- If no comments, display 'No comments' message -->
						<template v-else>
							No comments
						</template>
					</td>
				</template>
			</BaseTable>
		</template>
	</AuthenticatedLayout>

	<CreateTicketModal :labels="labels" :categories="categories" :agents="agents" />
	<EditTicketModal :ticket="selectedTicket" :labels="labels" :categories="categories" :agents="agents" />
	<DeleteTicketModal :ticket="selectedTicket" />
</template>

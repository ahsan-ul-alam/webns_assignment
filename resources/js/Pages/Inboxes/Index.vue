<template>

    <Head title="Inbox" />
    <AuthenticatedLayout>
        <div class="chat-container">
            <div class="messages" ref="messagesContainer">
                <div v-for="(message, index) in messages" :key="index" class="message"
                    :class="{ 'sent': message.sender_id === userId, 'received': message.sender_id !== userId }">
                    {{ message.message }}
                </div>
            </div>

            <div class="input-container">
                <input v-model="newMessage" placeholder="Type your message..." @keyup.enter="sendMessage" />
                <button @click="sendMessage">Send</button>
            </div>
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue';
import axios from 'axios';

const props = defineProps({
    userId: Number, // userId passed from Inertia
});

const messages = ref([]);
const newMessage = ref('');
const recipientId = 1; // Change as per your logic
const messagesContainer = ref(null);
const errorMessage = ref('');

// Fetch messages from the server
const fetchMessages = async () => {
    try {
        const response = await axios.get(route('messages.index')); // Use route helper if available
        messages.value = response.data.messages;
        scrollToBottom(); // Auto scroll to the bottom after fetching messages
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
};

// Send a new message
const sendMessage = async () => {
    if (!newMessage.value.trim()) {
        return; // Don't send empty messages
    }

    try {
        const response = await axios.post('http://127.0.0.1:8000/send-message', {
            message: newMessage.value,
            user_id: props.userId, // Use userId from props
            recipient_id: recipientId,
        });
        messages.value.push(response.data.message); // Add new message to the UI
        newMessage.value = ''; // Clear input field after sending
        nextTick(() => {
            scrollToBottom(); // Scroll to the bottom after sending
        });
        errorMessage.value = ''; // Clear any previous error
    } catch (error) {
        console.error('Error sending message:', error.response?.data);
        errorMessage.value = 'Failed to send message. Please try again.'; // Show error to user
    }
};

// Auto-scroll to the latest message
const scrollToBottom = () => {
    nextTick(() => {
        if (messagesContainer.value) {
            messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
        }
    });
};

// Poll messages every 5 seconds
let messageInterval;

onMounted(() => {
    fetchMessages(); // Initial fetch for messages
    messageInterval = setInterval(fetchMessages, 5000); // Poll for new messages every 5 seconds
});

onBeforeUnmount(() => {
    clearInterval(messageInterval); // Clear the polling interval when component is unmounted
});
</script>


<style scoped>
.chat-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 500px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f9f9f9;
}

.messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

/* Message Styles */
.message {
    max-width: 75%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 8px;
    word-wrap: break-word;
}

/* Sent Messages (Right Side) */
.sent {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
}

/* Received Messages (Left Side) */
.received {
    background-color: #e5e5e5;
    align-self: flex-start;
}

/* Input Section */
.input-container {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
    background: white;
}

input {
    flex: 1;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
}

button {
    padding: 8px 15px;
    margin-left: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

/* Error Message */
.error-message {
    color: red;
    margin-top: 10px;
    font-size: 14px;
}
</style>

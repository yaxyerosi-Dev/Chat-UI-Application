const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");

// Send Message Function
function sendMessage() {

    const message = messageInput.value.trim();

    if(message === "") {
        return;
    }

    // Create user message
    createMessage(message, "user");

    // Clear input
    messageInput.value = "";

    // Show typing animation
    typing.classList.remove("hidden");

    // Fake bot reply
    setTimeout(() => {

        typing.classList.add("hidden");

        createMessage("Hello! You said: " + message, "bot");

    }, 1500);
}

// Create Message Function
function createMessage(text, sender) {

    // Message wrapper
    const messageDiv = document.createElement("div");

    messageDiv.className =
        sender === "user"
        ? "flex justify-end"
        : "flex justify-start";

    // Bubble
    const bubble = document.createElement("div");

    bubble.className =
        sender === "user"
        ? "bg-blue-600 text-white px-4 py-2 rounded-2xl max-w-[75%]"
        : "bg-gray-300 text-black px-4 py-2 rounded-2xl max-w-[75%]";

    // Message text
    const messageText = document.createElement("p");
    messageText.textContent = text;

    // Timestamp
    const time = document.createElement("span");

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    time.textContent = `${hours}:${minutes}`;

    time.className = "block text-xs mt-1 opacity-70";

    // Append elements
    bubble.appendChild(messageText);
    bubble.appendChild(time);

    messageDiv.appendChild(bubble);

    chatBox.appendChild(messageDiv);

    // Auto scroll
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Button Click
sendBtn.addEventListener("click", sendMessage);

// Enter Key
messageInput.addEventListener("keypress", function(e){

    if(e.key === "Enter") {
        sendMessage();
    }

});
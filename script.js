function checkPassword() {
    var password = document.getElementById("password").value;
    // Simulate password verification (replace with backend check)
    if (password === "your_password_here") {
        showCreateRoomForm();
    } else {
        document.getElementById("password-message").textContent = "Incorrect password. Please try again.";
    }
}

function showCreateRoomForm() {
    document.getElementById("password-form").style.display = "none";
    document.getElementById("create-room-form").style.display = "block";
}

function generateChatCode() {
    var chatCode = generateRandomCode(); // Replace with actual code generation logic
    document.getElementById("chat-code").textContent = "Your Chat Code: " + chatCode;
    document.getElementById("chat-code-display").textContent = chatCode;
    document.getElementById("create-room-form").style.display = "none";
    document.getElementById("chat-room").style.display = "block";
}

function generateRandomCode() {
    // Function to generate a random alphanumeric code (example)
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var code = '';
    for (var i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

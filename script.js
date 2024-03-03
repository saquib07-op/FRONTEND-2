
        function validateForm() {
            // Reset error messages
            document.getElementById("emailError").style.display = "none";
            document.getElementById("passwordError").style.display = "none";
            document.getElementById("validationMessage1").style.display = "none";

            // Get form values
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Perform validation
            if (email.length <= 3 || !email.includes("@") || !email.includes(".")) {
                document.getElementById("emailError").style.display = "block";
            } else if (password.length <= 8) {
                document.getElementById("passwordError").style.display = "block";
            } else {
                // Validation successful
                document.getElementById("successEmail").innerText = email;
                document.getElementById("successMessage").style.display = "flex";
                document.getElementById("validationMessage2").style.display = "block";
            }
        }

        function resetForm() {
            // Reset form and messages
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("successMessage").style.display = "none";
            document.getElementById("validationMessage2").style.display = "none";
            document.getElementById("validationMessage1").style.display = "block";
        }
    

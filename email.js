document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('email-link');
    
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the obfuscated email from data attribute
            const obfuscatedEmail = this.getAttribute('data-email');
            
            // Decode the email (base64)
            const decodedEmail = atob(obfuscatedEmail).split('').reverse().join('');
            
            // Update the link
            this.textContent = decodedEmail;
            this.href = 'mailto:' + decodedEmail;
            
            // Remove the click handler after first use
            this.removeEventListener('click', arguments.callee);
        });
    }
}); 
// Cookie Management in JavaScript
document.cookie = 'user=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/';
const userCookie = document.cookie.split(';').find(cookie => cookie.includes('user'));

const firstAttempts = document.querySelectorAll('.first-attempt');
firstAttempts.forEach(p => p.classList.add('active'));

let dataBorder = Array.from(document.querySelectorAll('[data-border]'));
dataBorder = dataBorder.map(e => e.dataset.elActive = '');

const hacks = document.querySelectorAll('.hack');
hacks.forEach(e => e.title = 'hacking');

const hijacks = document.querySelectorAll('.hijack');
hijacks.forEach(e => e.removeAttribute('title'));

const stElements = document.querySelectorAll('.st1.st2');
stElements.forEach(e => e.setAttribute('style', 'color: red; font-size: 15px;'));

const delsNoHijack = document.querySelectorAll('.del:not(.hijack)');
delsNoHijack.forEach(e => e.setAttribute('data-hack-active', ''));
delsNoHijack.forEach(e => e.removeAttribute('data-hack-inactive'));

const lastAttemptSpans = document.querySelectorAll('.last-attempt > span');
lastAttemptSpans.forEach(e => e.setAttribute('style', 'display: none;'));

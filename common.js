function getUsers(){return JSON.parse(localStorage.getItem('users')||'{}');}
function saveUsers(u){localStorage.setItem('users',JSON.stringify(u));}
function setSession(username,role){localStorage.setItem('session',JSON.stringify({username,role}));}
function getSession(){return JSON.parse(localStorage.getItem('session')||'null');}
function clearSession(){localStorage.removeItem('session');}

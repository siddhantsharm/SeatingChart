export default function signOut() {
  sessionStorage.clear();
  window.location.href = "/login";
};
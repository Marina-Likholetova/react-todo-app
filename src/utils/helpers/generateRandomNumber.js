export default function generateRandomNumber() {
    return Math.random().toString(36).substring(2, 5);
}
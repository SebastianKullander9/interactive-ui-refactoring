export const profileCardCss = `.profile-card {
    width: 500px;
    height: 180px;
    display: flex;
    border: 1px solid #d1d5db; /* gray-300 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
    border-radius: 0.75rem; /* rounded-xl */
    font-family: sans-serif;
}

.profile-image-container {
    background-color: #6366f1; /* indigo-500 */
    width: 33.333%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.75rem;
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
}

.profile-image-wrapper {
    background-color: #ffffff;
    border-radius: 9999px;
    padding: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
}

.profile-image {
    border-radius: 9999px;
    width: 120px;
    height: 120px;
}

.profile-details {
    width: 66.667%;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    box-sizing: border-box;
}

.detail-row {
    display: flex;
    gap: 0.5rem;
    font-size: 1rem;
}

.detail-row label {
}

.detail-row p {
    margin: 0;
}`;
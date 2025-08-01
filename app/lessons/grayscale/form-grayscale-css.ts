export const formGrayscaleCss = `
p {
    padding: 0;
    margin: 0;
}

body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background-color: #F9FAFB;
    color: #111827;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding: 4rem;
    background-color: #f3f4f6;
    box-sizing: border-box;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #E5E7EB;
}

.header-text {
    font-size: 1.25rem;
    width: 50%;
    color: #111827;
}

.billing-toggle {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: #111827;
}

.toggle-track {
    width: 2.5rem;
    height: 1.2rem;
    background-color: #6B7280;
    border-radius: 9999px;
    padding: 0.25rem;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
}

.toggle-thumb {
    width: 50%;
    height: 100%;
    background-color: white;
    border-radius: 9999px;
}

.main {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.input {
    background-color: white;
    padding: 1.2rem;
    border-radius: 0.375rem;
    border: none;
    font-size: 1rem;
    box-sizing: border-box;
}

.button {
    background-color: #374151;
    color: #F9FAFB;
    padding: 1.2rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
}

.plans {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.plan {
    background-color: white;
    padding: 1rem;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 2px solid transparent;
}

.plan.selected {
    border-color: #E5E7EB;
}

.plan-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.plan-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #6B7280;
}

.checkmark {
    width: 1.75rem;
    height: 1.75rem;
    background-color: #374151;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.plan-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.plan-size {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
}

.price {
    font-weight: 500;
}`
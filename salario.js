// Função para exibir o nome do responsável
function displayResponsibleName() {
    const nameField = document.getElementById('responsible-name');
    const displayName = document.getElementById('display-name');
    
    if (nameField.value.trim()) {
        displayName.textContent = `Responsável: ${nameField.value}`;
    } else {
        alert('Por favor, insira o nome do responsável.');
    }
}

// Função para adicionar um funcionário à tabela
function addEmployeeToTable(name, position, salary) {
    const tableBody = document.querySelector('#payroll-table tbody');
    const row = document.createElement('tr');

    // Calcula o imposto (10% do salário) e o salário líquido
    const tax = salary * 0.1;
    const netSalary = salary - tax;

    // Cria as células da tabela
    row.innerHTML = `
        <td>${name}</td>
        <td>${position}</td>
        <td>${salary.toFixed(2)}</td>
        <td>${tax.toFixed(2)}</td>
        <td>${netSalary.toFixed(2)}</td>
    `;

    // Adiciona a linha na tabela
    tableBody.appendChild(row);
}

// Lida com o envio do formulário
document.getElementById('payroll-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const salary = parseFloat(document.getElementById('salary').value);

    if (!name || !position || isNaN(salary)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Adiciona o funcionário à tabela
    addEmployeeToTable(name, position, salary);

    // Limpa os campos do formulário
    e.target.reset();
});

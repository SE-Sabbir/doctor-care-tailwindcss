const serviceItem = [
    {
        id:1,
        title: "Problemas digestivos",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id:2,
        title: "Saúde Hormonal",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id:3,
        title: "Bem-estar mental",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id:4,
        title: "Cuidados Pediátricos",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id:5,
        title: "Autoimune e Inflamação",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
    {
        id:6,
        title: "Saúde do Coração",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
    },
]

// generate service card
function serviceCard (item) {
    return `
    <div class="font-primary rounded-lg overflow-hidden bg-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ">
            <div class="p-6 text-left">
              <img src="./images/service-icon.png" alt="service-icon">
              <h2 class="text-2xl font-bold py-4">Problemas digestivos</h2>
              <p class="text-md font-normal  ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
            </div>
    </div>
    `
}

const serviceContainer = document.getElementById("service-container")
serviceContainer.innerHTML = serviceItem.map((item) => serviceCard(item)).join('')
console.log(serviceContainer.innerHTML)
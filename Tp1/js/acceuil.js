const taskInput = document.getElementById("taskInput");
        const addTaskBtn = document.getElementById("addTask");
        const taskList = document.getElementById("taskList");
        const clearAll = document.getElementById("clearAll");
        const trierTachesBtn = document.getElementById("trierTaches");
        const rechercherTacheBtn = document.getElementById("rechercherTache");

        addTaskBtn.addEventListener("click", addTask);
        trierTachesBtn.addEventListener("click", trierTaches);
        rechercherTacheBtn.addEventListener("click", rechercherUneTache);

        function w3_open() {
            document.getElementById("mySidebar").style.display = "block";
        }

        function w3_close() {
            document.getElementById("mySidebar").style.display = "none";
        }

        function addTask() {
            const taskText = taskInput.value.trim();

            if (taskText !== "") {
                const listItem = document.createElement("li");
                const taskTextNode = document.createElement("span");
                taskTextNode.textContent = taskText;
                listItem.appendChild(taskTextNode);

                taskList.appendChild(listItem);
                taskInput.value = "";

                const doneBtn = document.createElement("img");
                doneBtn.setAttribute("src", "../image/icons8-checkmark-50.png");
                doneBtn.setAttribute('height', '18px');
                doneBtn.setAttribute('width', '18px');
                listItem.appendChild(doneBtn);

                doneBtn.addEventListener("click", () => {
                    listItem.classList.toggle("done");
                    taskTextNode.classList.toggle("done");
                    updateLocalStorage();
                });

                const editBtn = document.createElement("img");
                editBtn.setAttribute("src", "../image/icons8-edit-file-50.png");
                editBtn.setAttribute('height', '18px');
                editBtn.setAttribute('width', '18px');
                listItem.appendChild(editBtn);

                editBtn.addEventListener("click", () => {
                    editTask(listItem, taskTextNode);
                });

                const deleteBtn = document.createElement("img");
                deleteBtn.setAttribute("src", "../image/icons8-delete-60.png");
                deleteBtn.setAttribute('height', '18px');
                deleteBtn.setAttribute('width', '18px');
                listItem.appendChild(deleteBtn);

                deleteBtn.addEventListener("click", () => {
                    listItem.remove();
                    updateLocalStorage();
                });
            } else {
                alert("Veuillez entrer une tâche valide.");
            }
        }

        function editTask(listItem, taskTextNode) {
            const newText = prompt("Modifier la tâche :", taskTextNode.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskTextNode.textContent = newText.trim();
                updateLocalStorage();
            }
        }

        function updateLocalStorage() {
            const tasks = Array.from(document.querySelectorAll("#taskList li")).map(task => {
                return {
                    text: task.querySelector("span").textContent.trim(),
                    done: task.classList.contains("done")
                };
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function loadFromLocalStorage() {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.forEach(task => {
                const listItem = document.createElement("li");
                const taskTextNode = document.createElement("span");
                taskTextNode.textContent = task.text;
                listItem.appendChild(taskTextNode);

                if (task.done) {
                    listItem.classList.add("done");
                    taskTextNode.classList.add("done");
                }
                taskList.appendChild(listItem);

                const doneBtn = document.createElement("img");
                doneBtn.setAttribute("src", "../image/icons8-checkmark-50.png");
                doneBtn.setAttribute('height', '18px');
                doneBtn.setAttribute('width', '18px');
                listItem.appendChild(doneBtn);

                doneBtn.addEventListener("click", () => {
                    listItem.classList.toggle("done");
                    taskTextNode.classList.toggle("done");
                    updateLocalStorage();
                });

                const editBtn = document.createElement("img");
                editBtn.setAttribute("src", "../image/icons8-edit-file-50.png");
                editBtn.setAttribute('height', '18px');
                editBtn.setAttribute('width', '18px');
                listItem.appendChild(editBtn);

                editBtn.addEventListener("click", () => {
                    editTask(listItem, taskTextNode);
                });

                const deleteBtn = document.createElement("img");
                deleteBtn.setAttribute("src", "../image/icons8-delete-60.png");
                deleteBtn.setAttribute('height', '18px');
                deleteBtn.setAttribute('width', '18px');
                listItem.appendChild(deleteBtn);

                deleteBtn.addEventListener("click", () => {
                    listItem.remove();
                    updateLocalStorage();
                });
            });
        }

        function trierTaches() {
            const taches = Array.from(document.querySelectorAll("#taskList li"));
            taches.sort((a, b) => a.textContent.localeCompare(b.textContent));
            taskList.innerHTML = "";
            taches.forEach(tache => taskList.appendChild(tache));
        }

        function rechercherUneTache() {
            const termeRecherche = prompt("Rechercher une tâche :");
            if (termeRecherche) {
                const taches = Array.from(document.querySelectorAll("#taskList li"));
                taches.forEach(tache => {
                    if (!tache.textContent.toLowerCase().includes(termeRecherche.toLowerCase())) {
                        tache.style.display = "none";
                    } else {
                        tache.style.display = "block";
                    }
                });
            }
        }

        clearAll.addEventListener("click", () => {
            localStorage.clear();
            taskList.innerHTML = ""; 
        });

        loadFromLocalStorage();